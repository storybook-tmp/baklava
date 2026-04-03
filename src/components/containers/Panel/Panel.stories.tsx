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
      <p>This is some content inside a panel. Panels are used as content containers for sections of a page.</p>
    </Panel>
  ),
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless Panel</Panel.Heading>
      <p>An edgeless panel has no outer border or padding, useful for nested layouts.</p>
    </Panel>
  ),
};

export const WithMultipleSections: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Panel>
        <Panel.Heading>Overview</Panel.Heading>
        <p>Summary information goes here.</p>
      </Panel>
      <Panel>
        <Panel.Heading>Details</Panel.Heading>
        <p>Detailed configuration and settings.</p>
      </Panel>
    </div>
  ),
};
