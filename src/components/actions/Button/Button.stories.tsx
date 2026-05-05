import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Primary button" />,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Secondary button" />,
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary" label="Tertiary button" />,
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" label="Download" icon="download" />,
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Disabled" disabled />,
};
