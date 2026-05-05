import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Link } from './Link.tsx';

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Link href="#example" label="Example Link" />,
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link', { name: /example link/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '#example');
  },
};

export const Small: Story = {
  render: () => <Link href="#example" label="Small Link" size="small" />,
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link', { name: /small link/i });
    await expect(link).toBeVisible();
  },
};

export const Medium: Story = {
  render: () => <Link href="#example" label="Medium Link" size="medium" />,
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link', { name: /medium link/i });
    await expect(link).toBeVisible();
  },
};

export const Disabled: Story = {
  render: () => <Link href="#example" label="Disabled Link" disabled />,
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link', { name: /disabled link/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('aria-disabled', 'true');
  },
};

export const Unstyled: Story = {
  render: () => <Link href="#example" label="Unstyled Link" unstyled />,
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link', { name: /unstyled link/i });
    await expect(link).toBeVisible();
  },
};

export const WithChildren: Story = {
  render: () => (
    <Link href="#example">
      Link with <strong>formatted</strong> content
    </Link>
  ),
  play: async ({ canvas }: any) => {
    const link = canvas.getByRole('link');
    await expect(link).toBeVisible();
  },
};
