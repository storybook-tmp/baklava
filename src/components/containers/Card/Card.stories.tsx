import preview from '../../../../.storybook/preview';

import { Card } from './Card.tsx';

const meta = preview.meta({
  title: 'AI Generated/Medium/Card',
  component: Card,
  args: {
    style: { inlineSize: '24rem' },
  },
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <Card {...args}>
      <Card.Heading>API tokens</Card.Heading>
      <p>Store, rotate, and review token health from one place.</p>
    </Card>
  ),
});

export default meta;

export const Default = meta.story();

export const LinkedFlat = meta.story({
  args: {
    flat: true,
  },
  render: args => (
    <Card {...args}>
      <Card.HeadingLink href="#">Deployment checklist</Card.HeadingLink>
      <p>Review the prerequisites before rolling out the next cluster update.</p>
    </Card>
  ),
});
