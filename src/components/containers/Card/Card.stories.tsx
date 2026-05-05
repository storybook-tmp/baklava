import type { Meta, StoryObj } from '@storybook/react-vite';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Card } from './Card.tsx';

const meta = {
  title: 'AI Generated/Medium/Card',
  component: Card,
  decorators: [
    Story => (
      <LayoutDecorator size="medium">
        <Story />
      </LayoutDecorator>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Heading>Secrets Inventory</Card.Heading>
        <p>Track access, review recent changes, and keep sensitive material organized in one place.</p>
      </>
    ),
  },
};

export const WithIconAndFlatVariant: Story = {
  args: {
    flat: true,
    children: (
      <>
        <Card.Heading icon={<Icon icon="dashboard" />}>Workspace overview</Card.Heading>
        <p>Use the flat variant when the card is nested inside another elevated surface.</p>
      </>
    ),
  },
};
