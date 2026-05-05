import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Input } from '../../components/forms/controls/Input/Input.tsx';
import { PublicLayout } from './PublicLayout.tsx';

const meta = {
  component: PublicLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PublicLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const signInHeading = (
  <PublicLayout.Heading>
    <h1>Sign in to Fortanix Armor</h1>
    <p>Use your workspace credentials to continue.</p>
  </PublicLayout.Heading>
);

export const SignIn: Story = {
  render: () => (
    <PublicLayout
      heading={signInHeading}
      productInfoCards={
        <PublicLayout.ProductInfoCard>
          <PublicLayout.ProductInfoCard.Heading>Why teams choose Armor</PublicLayout.ProductInfoCard.Heading>
          Protect keys, certificates, and secrets with one centralized workflow.
        </PublicLayout.ProductInfoCard>
      }
    >
      <div>
        <Input inputProps={{ 'aria-label': 'Email address' }} placeholder="Email address" />
        <Input inputProps={{ 'aria-label': 'Password' }} placeholder="Password" type="password" />
        <Button kind="primary" label="Sign in" />
      </div>
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Sign in to Fortanix Armor' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Sign in' })).toBeVisible();
    await expect(canvas.getByRole('img', { name: 'Fortanix' })).toBeVisible();
  },
};

export const MultipleInfoCards: Story = {
  render: () => (
    <PublicLayout
      heading={
        <PublicLayout.Heading>
          <h1>Create your workspace</h1>
          <p>Set up a new environment for your team.</p>
        </PublicLayout.Heading>
      }
      productInfoCards={
        <>
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>Centralized key management</PublicLayout.ProductInfoCard.Heading>
            Manage lifecycle operations across environments from one place.
          </PublicLayout.ProductInfoCard>
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>Compliance-ready workflows</PublicLayout.ProductInfoCard.Heading>
            Keep approvals and audit trails close to the deployment workflow.
          </PublicLayout.ProductInfoCard>
        </>
      }
    >
      <Button kind="primary" label="Start setup" />
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Create your workspace' })).toBeVisible();
    await expect(canvas.getByText('Centralized key management')).toBeVisible();
    await expect(canvas.getByText('Compliance-ready workflows')).toBeVisible();
  },
};

export const PasswordReset: Story = {
  render: () => (
    <PublicLayout
      heading={
        <PublicLayout.Heading>
          <h1>Reset your password</h1>
          <p>Enter your email address and we will send recovery instructions.</p>
        </PublicLayout.Heading>
      }
      productInfoCards={
        <PublicLayout.ProductInfoCard>
          <PublicLayout.ProductInfoCard.Heading>Need access quickly?</PublicLayout.ProductInfoCard.Heading>
          Contact your workspace administrator if you no longer have access to your recovery email.
        </PublicLayout.ProductInfoCard>
      }
    >
      <div>
        <Input inputProps={{ 'aria-label': 'Recovery email' }} placeholder="Recovery email" />
        <Button kind="primary" label="Send reset link" />
      </div>
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Reset your password' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Send reset link' })).toBeVisible();
    await expect(canvas.getByText('Need access quickly?')).toBeVisible();
  },
};
