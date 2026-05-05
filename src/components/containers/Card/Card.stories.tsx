import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card.tsx';
import { Icon } from '../../graphics/Icon/Icon.tsx';
import { Button } from '../../actions/Button/Button.tsx';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Application</Card.Heading>
      <p>A card is a smaller container, typically used in lists or grids.</p>
    </Card>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="dashboard" />}>Dashboard</Card.Heading>
      <p>View your application metrics and analytics.</p>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Nested Card</Card.Heading>
      <p>A flat card has no border or padding, useful when nested inside other containers.</p>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px' }}>
      <Card>
        <Card.Heading>Keys</Card.Heading>
        <p>Manage encryption keys.</p>
        <Button kind="tertiary" label="View all" />
      </Card>
      <Card>
        <Card.Heading>Groups</Card.Heading>
        <p>Manage access groups.</p>
        <Button kind="tertiary" label="View all" />
      </Card>
    </div>
  ),
};
