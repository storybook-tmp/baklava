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
    children: 'This is the content of a panel section.',
  },
};

export const WithHeading: Story = {
  render: () => (
    <Panel>
      <Panel.Heading>Panel Title</Panel.Heading>
      <p>Panel content goes here with a heading above.</p>
    </Panel>
  ),
};
