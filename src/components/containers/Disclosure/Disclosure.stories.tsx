import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure } from './Disclosure.tsx';

const meta = {
  title: 'AI Generated/Medium/Disclosure',
  component: Disclosure,
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Click to expand',
    children: 'This is the collapsible content inside the disclosure.',
  },
};

export const OpenByDefault: Story = {
  args: {
    title: 'Already expanded',
    children: 'This disclosure starts in the open state.',
    open: true,
  },
};
