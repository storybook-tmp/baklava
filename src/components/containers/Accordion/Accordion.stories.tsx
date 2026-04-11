import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Accordion } from './Accordion.tsx';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="First section">
        <p>Content of the first section.</p>
      </Accordion.Item>
      <Accordion.Item title="Second section">
        <p>Content of the second section.</p>
      </Accordion.Item>
      <Accordion.Item title="Third section">
        <p>Content of the third section.</p>
      </Accordion.Item>
    </Accordion>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('First section')).toBeVisible();
    await expect(canvas.getByText('Second section')).toBeVisible();
    await expect(canvas.getByText('Third section')).toBeVisible();
    await userEvent.click(canvas.getByText('First section'));
    await expect(canvas.getByText('Content of the first section.')).toBeVisible();
  },
};

export const NonExclusive: Story = {
  render: () => (
    <Accordion exclusive={false}>
      <Accordion.Item title="Section A" open>
        <p>Content of section A - always visible initially.</p>
      </Accordion.Item>
      <Accordion.Item title="Section B" open>
        <p>Content of section B - also visible initially.</p>
      </Accordion.Item>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Content of section A - always visible initially.')).toBeVisible();
    await expect(canvas.getByText('Content of section B - also visible initially.')).toBeVisible();
  },
};

export const PreOpened: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="Collapsed section">
        <p>This section is collapsed by default.</p>
      </Accordion.Item>
      <Accordion.Item title="Open section" open>
        <p>This section is open by default.</p>
      </Accordion.Item>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Open section')).toBeVisible();
    await expect(canvas.getByText('This section is open by default.')).toBeVisible();
  },
};
