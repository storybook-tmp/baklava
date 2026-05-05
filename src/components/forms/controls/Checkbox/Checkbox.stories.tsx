import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { Switch } from '../Switch/Switch';
import { RadioGroup } from '../RadioGroup/RadioGroup';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Checkbox.Labeled label="Accept terms and conditions" />,
};

export const Checked: Story = {
  render: () => <Checkbox.Labeled label="Email notifications" defaultChecked />,
};

export const Disabled: Story = {
  render: () => <Checkbox.Labeled label="Cannot change" disabled defaultChecked />,
};

export const SwitchDefault: Story = {
  name: 'Switch',
  render: () => <Switch.Labeled label="Dark mode" />,
};

export const SwitchChecked: Story = {
  name: 'Switch (On)',
  render: () => <Switch.Labeled label="Enable notifications" defaultChecked />,
};

export const RadioGroupHorizontal: Story = {
  name: 'RadioGroup',
  render: () => (
    <RadioGroup label="Select size" defaultSelected="medium">
      <RadioGroup.Button radioKey="small" label="Small" />
      <RadioGroup.Button radioKey="medium" label="Medium" />
      <RadioGroup.Button radioKey="large" label="Large" />
    </RadioGroup>
  ),
};

export const RadioGroupVertical: Story = {
  name: 'RadioGroup (Vertical)',
  render: () => (
    <RadioGroup label="Sort by" orientation="vertical" defaultSelected="name">
      <RadioGroup.Button radioKey="name" label="Name" />
      <RadioGroup.Button radioKey="date" label="Date created" />
      <RadioGroup.Button radioKey="modified" label="Last modified" />
    </RadioGroup>
  ),
};
