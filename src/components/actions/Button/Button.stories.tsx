import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button kind="primary" label="Save changes" />,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Cancel" />,
};

export const Tertiary: Story = {
  render: () => <Button kind="tertiary" label="Learn more" />,
};

export const WithIcon: Story = {
  render: () => <Button kind="primary" icon="dashboard" label="Dashboard" />,
};

export const Disabled: Story = {
  render: () => <Button kind="primary" label="Submit" disabled />,
};

export const Nonactive: Story = {
  render: () => <Button kind="primary" label="Processing..." nonactive />,
};

export const AllKinds: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button kind="primary" label="Primary" />
      <Button kind="secondary" label="Secondary" />
      <Button kind="tertiary" label="Tertiary" />
    </div>
  ),
};
