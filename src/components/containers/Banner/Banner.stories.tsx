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
    variant: 'info',
    title: 'Did you know?',
    children: 'This is an informational message for the user.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Something went wrong',
    children: 'An error occurred. Please try again later.',
    showCloseAction: true,
    onClose: () => {},
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Operation complete',
    children: 'Your changes have been saved successfully.',
  },
};
