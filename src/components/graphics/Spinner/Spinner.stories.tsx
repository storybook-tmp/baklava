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
    size: 'medium',
  },
};

export const Inline: Story = {
  args: {
    inline: true,
    size: 'small',
    'aria-label': 'Loading',
  },
  render: args => (
    <span>
      Syncing data <Spinner {...args} /> please wait
    </span>
  ),
};
