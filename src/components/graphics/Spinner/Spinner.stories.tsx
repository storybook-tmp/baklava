import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './Spinner.tsx';


const meta = {
  title: 'AI Generated/Simple/Spinner',
  component: Spinner,
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {};

export const LargeInline: Story = {
  args: {
    inline: true,
    size: 'large',
  },
};
