import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Panel heading</Panel.Heading>
      <p>Panel content goes here. This is a container for grouping related content.</p>
    </Panel>
  ),
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless panel</Panel.Heading>
      <p>This panel has no outer border or padding.</p>
    </Panel>
  ),
};

export const WithMultipleSections: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Dashboard</Panel.Heading>
      <p>Section one with some introductory text.</p>
      <p>Section two with additional details and context for the user.</p>
    </Panel>
  ),
};
