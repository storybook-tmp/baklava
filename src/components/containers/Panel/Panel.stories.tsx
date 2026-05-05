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
      <Panel.Heading>Panel Heading</Panel.Heading>
      <p>Panel content goes here. This is a basic panel with a heading and body text.</p>
    </Panel>
  ),
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless Panel</Panel.Heading>
      <p>This panel has no border styling, useful when embedded in other containers.</p>
    </Panel>
  ),
};

export const WithMultipleSections: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Security Overview</Panel.Heading>
      <p>Active keys: 12</p>
      <p>Pending approvals: 3</p>
      <p>Last audit: March 15, 2025</p>
    </Panel>
  ),
};
