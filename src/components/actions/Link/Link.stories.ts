import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta = {
  title: 'AI Generated/Medium/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    label: 'Click here',
  },
};

export const Small: Story = {
  args: {
    href: '#',
    label: 'Small link',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    href: '#',
    label: 'Medium link',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    label: 'Disabled link',
    disabled: true,
  },
};

export const Unstyled: Story = {
  args: {
    href: '#',
    label: 'Unstyled link',
    unstyled: true,
  },
};

export const WithChildren: Story = {
  args: {
    href: '#',
    children: 'Link with children content',
  },
};
