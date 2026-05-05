import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBar } from './ProgressBar.tsx';

const meta = {
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div style={{ inlineSize: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Deployment progress',
    hintText: 'Uploading artifacts',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    progress: 42,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    hintText: 'Ready to review',
  },
};
