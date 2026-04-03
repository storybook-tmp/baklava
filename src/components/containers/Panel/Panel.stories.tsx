import type { Meta, StoryObj } from '@storybook/react-vite';
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
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless>
      <Panel.Heading>Edgeless Panel</Panel.Heading>
      <p>This panel has no border styling.</p>
    </Panel>
  ),
};

export const WithoutHeading: Story = {
  render: () => (
    <Panel>
      <p>A panel without a heading.</p>
    </Panel>
  ),
};
