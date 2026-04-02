import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'AI Generated/Medium/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
    type: 'text',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    type: 'text',
    icon: 'search',
    iconLabel: 'Search icon',
  },
};
