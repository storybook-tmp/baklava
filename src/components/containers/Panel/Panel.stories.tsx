import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Panel } from './Panel.tsx';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Panel Title</Panel.Heading>
      <p>Panel content goes here.</p>
    </Panel>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /panel title/i });
    await expect(heading).toBeVisible();
    const content = canvas.getByText(/panel content goes here/i);
    await expect(content).toBeVisible();
  },
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless Panel</Panel.Heading>
      <p>This panel has no border or padding.</p>
    </Panel>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /edgeless panel/i });
    await expect(heading).toBeVisible();
  },
};

export const Unstyled: Story = {
  render: () => (
    <Panel unstyled>
      <Panel.Heading>Unstyled Panel</Panel.Heading>
      <p>This panel has no styling applied.</p>
    </Panel>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /unstyled panel/i });
    await expect(heading).toBeVisible();
  },
};

export const WithLongContent: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Long Content Panel</Panel.Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Panel>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /long content panel/i });
    await expect(heading).toBeVisible();
  },
};
