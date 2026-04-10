import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor, within } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';

import { TextLine } from './TextLine.tsx';

const meta = {
  component: TextLine,
} satisfies Meta<typeof TextLine>;

export default meta;

type Story = StoryObj<typeof meta>;

const longLabel = 'Anand Kashyap - Very Long Name That Will Overflow';

export const Default: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <TextLine>Short status label</TextLine>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/short status label/i)).toBeVisible();
  },
};

export const OverflowTooltip: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          inlineSize: '14ch',
        }}
      >
        <TextLine style={{ minInlineSize: 0 }}>{longLabel}</TextLine>
      </div>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    const label = canvas.getByText(longLabel);

    await userEvent.hover(label);

    const body = within(canvasElement.ownerDocument.body);
    await waitFor(() => {
      expect(body.getByRole('tooltip')).toHaveTextContent(longLabel);
    });
  },
};

export const TooltipDisabled: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          inlineSize: '14ch',
        }}
      >
        <TextLine showOverflowTooltip={false} style={{ minInlineSize: 0 }}>
          {longLabel}
        </TextLine>
      </div>
    </LayoutDecorator>
  ),
  play: async ({ canvas, canvasElement, userEvent }) => {
    const label = canvas.getByText(longLabel);

    await userEvent.hover(label);

    await expect(label).toBeVisible();
    await expect(within(canvasElement.ownerDocument.body).queryByRole('tooltip')).not.toBeInTheDocument();
  },
};
