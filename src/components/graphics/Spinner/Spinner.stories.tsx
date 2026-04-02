import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './Spinner.tsx';

const meta = {
  title: 'AI Generated/Simple/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'small',
    'aria-label': 'Loading',
  },
};

export const LargeInline: Story = {
  args: {
    inline: true,
    size: 'large',
    'aria-label': 'Saving in progress',
  },
};
