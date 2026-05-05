import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox.tsx';

const meta = {
  title: 'AI Generated/Complex/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Labeled: Story = {
  render: () => (
    <Checkbox.Labeled label="Accept terms and conditions" defaultChecked={true} />
  ),
};
