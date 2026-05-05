import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorLayout } from './ErrorLayout.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { Button } from '../../components/actions/Button/Button.tsx';

const meta = {
  component: ErrorLayout,
} satisfies Meta<typeof ErrorLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ErrorLayout title="Page Not Found" />
  ),
};

export const WithDescription: Story = {
  render: () => (
    <ErrorLayout
      title="Access Denied"
      description={<p>You do not have permission to view this resource. Contact your administrator for access.</p>}
    />
  ),
};

export const WithIconAndActions: Story = {
  render: () => (
    <ErrorLayout
      icon={<Icon icon="warning" />}
      title="Something Went Wrong"
      description={<p>An unexpected error occurred while processing your request.</p>}
    >
      <ErrorLayout.Actions>
        <Button kind="primary" label="Try Again" />
        <Button kind="secondary" label="Go Home" />
      </ErrorLayout.Actions>
    </ErrorLayout>
  ),
};
