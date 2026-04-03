import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Save" />,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Cancel" />,
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary" label="Learn more" />,
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" label="Download" icon="download" />,
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Save" disabled />,
};
