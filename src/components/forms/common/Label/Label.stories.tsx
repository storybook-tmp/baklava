import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './Label.tsx';

const meta = {
  title: 'AI Generated/Simple/Label',
  component: Label,
  args: {
    label: 'Enable notifications',
  },
  render: (args) => (
    <Label {...args}>
      <input type="checkbox" defaultChecked />
    </Label>
  ),
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InlineStart: Story = {};

export const InlineEnd: Story = {
  args: {
    label: 'Remember this device',
    position: 'inline-end',
  },
};
