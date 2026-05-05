import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Primary" />,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Secondary" />,
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary" label="Tertiary" />,
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" icon="home" label="Home" />,
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Disabled" disabled />,
};

export const NonActive: Story = {
  render: () => <Button kind="primary" label="Non-active" nonactive />,
};
