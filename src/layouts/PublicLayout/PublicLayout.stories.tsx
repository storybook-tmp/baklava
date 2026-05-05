import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '../../components/actions/Button/Button.tsx';
import { InputField } from '../../components/forms/fields/InputField/InputField.tsx';
import { Form } from '../../components/forms/context/Form/Form.tsx';
import { SubmitButton } from '../../components/forms/context/SubmitButton/SubmitButton.tsx';
import { FormLayout } from '../FormLayout/FormLayout.tsx';
import { PublicLayout } from './PublicLayout.tsx';

const meta = {
  component: PublicLayout,
} satisfies Meta<typeof PublicLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const productInfoCards = (
  <>
    <PublicLayout.ProductInfoCard>
      <PublicLayout.ProductInfoCard.Heading>Control plane</PublicLayout.ProductInfoCard.Heading>
      <p>Centralize policies, keys, and system-level activity.</p>
    </PublicLayout.ProductInfoCard>
    <PublicLayout.ProductInfoCard>
      <PublicLayout.ProductInfoCard.Heading>Operational insights</PublicLayout.ProductInfoCard.Heading>
      <p>Review access history and environment changes from one place.</p>
    </PublicLayout.ProductInfoCard>
  </>
);

export const Default: Story = {
  render: () => (
    <PublicLayout
      heading={<PublicLayout.Heading><h1>Welcome back</h1></PublicLayout.Heading>}
      productInfoCards={productInfoCards}
    >
      <p>Sign in to continue to the Fortanix management console.</p>
      <Button kind="primary" label="Continue" />
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(canvas.getByText(/centralize policies, keys/i)).toBeVisible();
  },
};

export const SignInForm: Story = {
  render: () => (
    <PublicLayout
      heading={<PublicLayout.Heading><h1>Sign in</h1></PublicLayout.Heading>}
      productInfoCards={productInfoCards}
    >
      <Form>
        <FormLayout>
          <InputField label="Email address" inputProps={{ defaultValue: 'anand@fortanix.com' }} />
          <InputField label="Password" inputProps={{ type: 'password', defaultValue: 'secret' }} />
          <SubmitButton label="Sign in" />
        </FormLayout>
      </Form>
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email address')).toHaveValue('anand@fortanix.com');
    await expect(canvas.getByRole('button', { name: 'Sign in' })).toBeVisible();
  },
};

export const ProductInfoOnly: Story = {
  render: () => (
    <PublicLayout productInfoCards={productInfoCards}>
      <p>Documentation and support links live alongside the main public content.</p>
    </PublicLayout>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/documentation and support links/i)).toBeVisible();
    await expect(canvas.getByText('Operational insights')).toBeVisible();
  },
};
