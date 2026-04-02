import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from './CheckboxGroup.tsx';

const meta = {
  title: 'AI Generated/Complex/CheckboxGroup',
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup label="Select options" orientation="horizontal" defaultSelected={new Set(['opt1'])}>
      <CheckboxGroup.Checkbox checkboxKey="opt1" label="Option 1" />
      <CheckboxGroup.Checkbox checkboxKey="opt2" label="Option 2" />
      <CheckboxGroup.Checkbox checkboxKey="opt3" label="Option 3" />
    </CheckboxGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <CheckboxGroup label="Permissions" orientation="vertical" defaultSelected={new Set(['read'])}>
      <CheckboxGroup.Checkbox checkboxKey="read" label="Read" />
      <CheckboxGroup.Checkbox checkboxKey="write" label="Write" />
      <CheckboxGroup.Checkbox checkboxKey="admin" label="Admin" />
    </CheckboxGroup>
  ),
};
