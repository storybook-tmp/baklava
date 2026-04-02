import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational banner.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This is a warning banner.',
  },
};
