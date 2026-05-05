import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Card } from './Card.tsx';
import { Icon } from '../../graphics/Icon/Icon.tsx';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Heading>Card Title</Card.Heading>
      <p>Card content goes here.</p>
    </Card>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /card title/i });
    await expect(heading).toBeVisible();
    const content = canvas.getByText(/card content goes here/i);
    await expect(content).toBeVisible();
  },
};

export const WithIcon: Story = {
  render: () => (
    <Card>
      <Card.Heading icon={<Icon icon="dashboard" />}>Dashboard Card</Card.Heading>
      <p>This card has an icon in the heading.</p>
    </Card>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /dashboard card/i });
    await expect(heading).toBeVisible();
  },
};

export const Flat: Story = {
  render: () => (
    <Card flat>
      <Card.Heading>Flat Card</Card.Heading>
      <p>This card is flat with no border.</p>
    </Card>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /flat card/i });
    await expect(heading).toBeVisible();
  },
};

export const Unstyled: Story = {
  render: () => (
    <Card unstyled>
      <Card.Heading>Unstyled Card</Card.Heading>
      <p>This card has no styling applied.</p>
    </Card>
  ),
  play: async ({ canvas }: any) => {
    const heading = canvas.getByRole('heading', { name: /unstyled card/i });
    await expect(heading).toBeVisible();
  },
};

export const WithHeadingLink: Story = {
  render: () => (
    <Card>
      <Card.HeadingLink href="#example">Link Card</Card.HeadingLink>
      <p>This card heading is a link.</p>
    </Card>
  ),
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link', { name: /link card/i });
    await expect(link).toBeVisible();
  },
};
