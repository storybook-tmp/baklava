import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Panel } from './Panel.tsx';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <p>Panel content goes here.</p>
    </Panel>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Panel content goes here.')).toBeVisible();
  },
};

export const WithHeading: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Panel title</Panel.Heading>
      <p>This panel has a heading and some body content.</p>
    </Panel>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /panel title/i })).toBeVisible();
    await expect(canvas.getByText('This panel has a heading and some body content.')).toBeVisible();
  },
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless panel</Panel.Heading>
      <p>An edgeless panel without border or padding.</p>
    </Panel>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /edgeless panel/i })).toBeVisible();
  },
};
