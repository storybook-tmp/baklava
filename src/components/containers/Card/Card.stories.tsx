import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../../graphics/Icon/Icon.tsx';
import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { DummyBkLink } from '../../../util/storybook/StorybookLink.tsx';

import { Card } from './Card.tsx';


const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <LayoutDecorator size="small">
      <Card {...args} />
    </LayoutDecorator>
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Heading>Cluster inventory</Card.Heading>
        <p>View the current health, ownership, and renewal posture for your fleet.</p>
      </>
    ),
  },
};

export const LinkedHeading: Story = {
  args: {
    children: (
      <>
        <Card.HeadingLink Link={DummyBkLink} href="/" icon={<Icon icon="dashboard" />}>
          Platform dashboard
        </Card.HeadingLink>
        <p>Jump into operational metrics, alerts, and active maintenance windows.</p>
      </>
    ),
  },
};
