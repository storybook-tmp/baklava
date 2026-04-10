import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Card } from '../../components/containers/Card/Card.tsx';

import { PublicLayout } from './PublicLayout.tsx';

const meta = {
  component: PublicLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PublicLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginPage: Story = {
  render: () => (
    <div style={{ minBlockSize: '48rem' }}>
      <PublicLayout
        heading={(
          <PublicLayout.Heading>
            <h1>Sign in to Fortanix Armor</h1>
            <p>Use your organization credentials to continue.</p>
          </PublicLayout.Heading>
        )}
        productInfoCards={(
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>
              Centralized controls
            </PublicLayout.ProductInfoCard.Heading>
            <p>Keep policy, key lifecycle, and audit workflows in one place.</p>
          </PublicLayout.ProductInfoCard>
        )}
      >
        <Card>
          <Card.Heading>Welcome back</Card.Heading>
          <p>Authentication controls would be rendered in this card.</p>
        </Card>
      </PublicLayout>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: /sign in to fortanix armor/i })).toBeVisible();
    await expect(canvas.getByText(/welcome back/i)).toBeVisible();
  },
};

export const MultipleProductCards: Story = {
  render: () => (
    <div style={{ minBlockSize: '48rem' }}>
      <PublicLayout
        heading={(
          <PublicLayout.Heading>
            <h1>Create your tenant</h1>
            <p>Provisioning takes only a few guided steps.</p>
          </PublicLayout.Heading>
        )}
        productInfoCards={(
          <>
            <PublicLayout.ProductInfoCard>
              <PublicLayout.ProductInfoCard.Heading>
                Secure-by-default workflows
              </PublicLayout.ProductInfoCard.Heading>
              <p>Start with recommended policies and adapt them as your team grows.</p>
            </PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard>
              <PublicLayout.ProductInfoCard.Heading>
                Shared visibility
              </PublicLayout.ProductInfoCard.Heading>
              <p>Surface the operational context new users need on day one.</p>
            </PublicLayout.ProductInfoCard>
          </>
        )}
      >
        <Card>
          <Card.Heading>Tenant setup</Card.Heading>
          <p>Setup controls stay in the main content column.</p>
        </Card>
      </PublicLayout>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/secure-by-default workflows/i)).toBeVisible();
    await expect(canvas.getByText(/shared visibility/i)).toBeVisible();
  },
};

export const CustomProductLogo: Story = {
  render: () => (
    <div style={{ minBlockSize: '48rem' }}>
      <PublicLayout
        heading={(
          <PublicLayout.Heading>
            <h1>Review invite</h1>
            <p>Confirm the target solution before accepting access.</p>
          </PublicLayout.Heading>
        )}
        productInfoCards={(
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>
              Shared environment
            </PublicLayout.ProductInfoCard.Heading>
            <p>Invites carry the same product context shown in the supporting panel.</p>
          </PublicLayout.ProductInfoCard>
        )}
      >
        <PublicLayout.FortanixLogo productName="Data Security Manager" />
      </PublicLayout>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/data security manager/i)).toBeVisible();
    await expect(canvas.getByText(/review invite/i)).toBeVisible();
  },
};
