import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Banner } from './Banner.tsx';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational banner message.',
  },
};

export const ErrorWithClose: Story = {
  args: {
    variant: 'error',
    title: 'Error occurred',
    children: 'Something went wrong. Please try again.',
    showCloseAction: true,
    onClose: fn(),
  },
};
