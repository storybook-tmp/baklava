import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel.tsx';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Panel Title</Panel.Heading>
      <p>This is the panel content area.</p>
    </Panel>
  ),
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless Panel</Panel.Heading>
      <p>This panel has no border or padding.</p>
    </Panel>
  ),
};

export const WithMultipleSections: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Settings</Panel.Heading>
      <p>General application settings go here.</p>
      <p>Configure your preferences below.</p>
    </Panel>
  ),
};
