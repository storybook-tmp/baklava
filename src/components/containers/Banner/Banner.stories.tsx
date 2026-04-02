import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner.tsx';

const meta = {
  title: 'AI Generated/Medium/Banner',
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: 'Information',
    children: 'This is an informational message.',
    variant: 'info',
  },
};

export const Error: Story = {
  args: {
    title: 'Error occurred',
    children: 'Something went wrong. Please try again.',
    variant: 'error',
    showCloseAction: true,
    onClose: () => {},
  },
};

export const Success: Story = {
  args: {
    title: 'Operation completed',
    children: 'Your changes have been saved.',
    variant: 'success',
  },
};
