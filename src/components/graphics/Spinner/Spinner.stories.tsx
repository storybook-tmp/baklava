import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner.tsx';

const meta = {
  title: 'AI Generated/Simple/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const MediumInline: Story = {
  args: {
    size: 'medium',
    inline: true,
  },
};
