import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel';

const meta = {
  title: 'AI Generated/Complex/Panel',
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Panel.Heading>Panel Title</Panel.Heading>
        <p>This is the panel content with some text inside.</p>
        <p>Panels are larger containers typically used for main content areas.</p>
      </>
    ),
  },
};

export const WithoutHeading: Story = {
  args: {
    children: (
      <p>Panel content without a heading.</p>
    ),
  },
};

export const Edgeless: Story = {
  args: {
    edgeless: true,
    children: (
      <>
        <Panel.Heading>Edgeless Panel</Panel.Heading>
        <p>This panel has no border or edges.</p>
      </>
    ),
  },
};

export const Unstyled: Story = {
  args: {
    unstyled: true,
    children: (
      <>
        <Panel.Heading>Unstyled Panel</Panel.Heading>
        <p>This panel has no styling applied.</p>
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    children: (
      <>
        <Panel.Heading>Panel with Long Content</Panel.Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </>
    ),
  },
};
