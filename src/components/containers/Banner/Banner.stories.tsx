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
    children: 'This is an informational message.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This action may have unintended consequences.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const WithCloseAction: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible',
    showCloseAction: true,
    onClose: () => {},
    children: 'Click the X to dismiss this banner.',
  },
};
