import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel';
import { Button } from '../../actions/Button/Button';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Security Keys</Panel.Heading>
      <p>Manage your encryption keys and certificates.</p>
    </Panel>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Account Settings</Panel.Heading>
      <p>Configure your account preferences and security options.</p>
      <Button kind="primary" label="Save Changes" />
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
