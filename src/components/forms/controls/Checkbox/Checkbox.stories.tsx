import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox.tsx';
import { Switch } from '../Switch/Switch.tsx';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Checkbox />,
};

export const Checked: Story = {
  render: () => <Checkbox defaultChecked />,
};

export const Labeled: Story = {
  render: () => <Checkbox.Labeled label="Accept terms and conditions" />,
};

export const Disabled: Story = {
  render: () => <Checkbox.Labeled label="Unavailable option" disabled />,
};

export const SwitchDefault: Story = {
  name: 'Switch',
  render: () => <Switch.Labeled label="Enable notifications" />,
};

export const SwitchChecked: Story = {
  name: 'Switch Checked',
  render: () => <Switch.Labeled label="Dark mode" defaultChecked />,
};

export const SwitchDisabled: Story = {
  name: 'Switch Disabled',
  render: () => <Switch.Labeled label="Feature locked" disabled />,
};
