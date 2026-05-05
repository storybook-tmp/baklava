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
      <p>Panel content goes here. This is a basic container for grouping related content.</p>
    </Panel>
  ),
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless panel</Panel.Heading>
      <p>This panel has no outer border or padding, for use in nested contexts.</p>
    </Panel>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>User details</Panel.Heading>
      <dl>
        <dt>Name</dt>
        <dd>Anand Kashyap</dd>
        <dt>Email</dt>
        <dd>anand@example.com</dd>
        <dt>Role</dt>
        <dd>Administrator</dd>
      </dl>
    </Panel>
  ),
};
