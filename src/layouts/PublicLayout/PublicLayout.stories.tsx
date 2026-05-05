import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '../../components/actions/Button/Button.tsx';
import { InputField } from '../../components/forms/fields/InputField/InputField.tsx';
import { Form } from '../../components/forms/context/Form/Form.tsx';
import { FormLayout } from '../FormLayout/FormLayout.tsx';
import { PublicLayout } from './PublicLayout.tsx';


const meta = {
  component: PublicLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PublicLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  render: () => (
    <PublicLayout
      heading={<PublicLayout.Heading>Sign in to Fortanix Armor</PublicLayout.Heading>}
      productInfoCards={
        <PublicLayout.ProductInfoCard>
          <PublicLayout.ProductInfoCard.Heading>Centralized visibility</PublicLayout.ProductInfoCard.Heading>
          <p>Connect accounts and review security posture from a single workspace.</p>
        </PublicLayout.ProductInfoCard>
      }
    >
      <Form>
        <FormLayout>
          <InputField label="Email" name="email" autoComplete="email" />
          <InputField label="Password" name="password" type="password" autoComplete="current-password" />
          <Button kind="primary" label="Continue" />
        </FormLayout>
      </Form>
    </PublicLayout>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('Sign in to Fortanix Armor')).toBeVisible();
    await expect(canvas.getByText('Centralized visibility')).toBeVisible();
    
    await userEvent.type(canvas.getByLabelText('Email'), 'operator@example.com');
    await expect(canvas.getByLabelText('Email')).toHaveValue('operator@example.com');
  },
};

export const ProductInfoCards: Story = {
  render: () => (
    <PublicLayout
      heading={<PublicLayout.Heading>Choose an onboarding path</PublicLayout.Heading>}
      productInfoCards={
        <>
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>Fast account setup</PublicLayout.ProductInfoCard.Heading>
            <p>Use guided connectors for cloud accounts and service identities.</p>
          </PublicLayout.ProductInfoCard>
          <PublicLayout.ProductInfoCard>
            <PublicLayout.ProductInfoCard.Heading>Policy review</PublicLayout.ProductInfoCard.Heading>
            <p>Start with templates and tune access policies after discovery.</p>
          </PublicLayout.ProductInfoCard>
        </>
      }
    >
      <Button kind="primary" label="Start onboarding" />
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Choose an onboarding path')).toBeVisible();
    await expect(canvas.getByText('Fast account setup')).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Start onboarding' })).toBeVisible();
  },
};

export const BrandedLogo: Story = {
  render: () => (
    <PublicLayout heading={<PublicLayout.Heading>Reset password</PublicLayout.Heading>}>
      <PublicLayout.FortanixLogo productName="Armor" />
      <p>Enter your email address and we will send a reset link.</p>
      <Form>
        <FormLayout>
          <InputField label="Email" name="email" />
        </FormLayout>
      </Form>
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Reset password')).toBeVisible();
    await expect(canvas.getAllByText('Armor')).toHaveLength(2);
    await expect(canvas.getByLabelText('Email')).toBeVisible();
  },
};
