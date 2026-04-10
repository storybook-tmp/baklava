import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { TextLine } from './TextLine.tsx';

const meta = {
  component: TextLine,
} satisfies Meta<typeof TextLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LayoutDecorator size="small">
      <TextLine>Primary key material</TextLine>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Primary key material')).toBeVisible();
  },
};

export const Truncated: Story = {
  render: () => (
    <LayoutDecorator size="x-small">
      <TextLine style={{ display: 'inline-block', maxWidth: '8rem' }}>
        Very long certificate authority name that should truncate
      </TextLine>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/very long certificate authority name/i)).toBeInTheDocument();
  },
};

export const WithoutTooltip: Story = {
  render: () => (
    <LayoutDecorator size="x-small">
      <TextLine showOverflowTooltip={false} style={{ display: 'inline-block', maxWidth: '7rem' }}>
        Tooltip disabled for this overflow example
      </TextLine>
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/tooltip disabled for this overflow example/i)).toBeInTheDocument();
  },
};
