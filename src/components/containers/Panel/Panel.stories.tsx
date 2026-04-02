import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel.tsx';

const meta = {
  title: 'AI Generated/Medium/Panel',
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Panel.Heading>Panel Heading</Panel.Heading>
        <p>This is the content inside the panel.</p>
      </>
    ),
  },
};

export const Edgeless: Story = {
  args: {
    edgeless: true,
    children: (
      <>
        <Panel.Heading>Edgeless Panel</Panel.Heading>
        <p>This panel has no visible edges.</p>
      </>
    ),
  },
};
