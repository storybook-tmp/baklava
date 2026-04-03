import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

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
  render: () => <Button kind="tertiary" label="Details" />,
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" icon="download" label="Download" />,
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Submit" disabled />,
};

export const Nonactive: Story = {
  render: () => <Button kind="primary" label="Processing..." nonactive />,
};
