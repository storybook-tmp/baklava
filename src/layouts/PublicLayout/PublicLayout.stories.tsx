import type { Meta, StoryObj } from '@storybook/react-vite';

import { Banner } from '../../components/containers/Banner/Banner.tsx';
import { Form } from '../../components/forms/context/Form/Form.tsx';
import { SubmitButton } from '../../components/forms/context/SubmitButton/SubmitButton.tsx';
import { InputField } from '../../components/forms/fields/InputField/InputField.tsx';
import { Link } from '../../components/actions/Link/Link.tsx';
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

const noopFormAction = async (_formData: FormData) => {};

const productInfoCards = (
  <>
    <PublicLayout.ProductInfoCard>
      <PublicLayout.ProductInfoCard.Heading>Protect every environment</PublicLayout.ProductInfoCard.Heading>
      Keep keys, secrets, and workload identities under one operational model across cloud, on-premises, and edge
      deployments.
    </PublicLayout.ProductInfoCard>
    <PublicLayout.ProductInfoCard>
      <PublicLayout.ProductInfoCard.Heading>Audit with confidence</PublicLayout.ProductInfoCard.Heading>
      Review access paths, deployment history, and policy exceptions without leaving the operational console.
    </PublicLayout.ProductInfoCard>
  </>
);

export const SignIn: Story = {
  render: () => (
    <PublicLayout
      heading={
        <PublicLayout.Heading>
          <h1>Sign in to Fortanix</h1>
          <p>Use your organization account to continue to Data Security Manager.</p>
        </PublicLayout.Heading>
      }
      productInfoCards={productInfoCards}
    >
      <Form action={noopFormAction}>
        <FormLayout>
          <InputField label="Email address" type="email" autoComplete="email" />
          <InputField label="Password" type="password" autoComplete="current-password" />
          <SubmitButton label="Continue" />
          <Link href="#">Need help signing in?</Link>
        </FormLayout>
      </Form>
    </PublicLayout>
  ),
};

export const ResetPassword: Story = {
  render: () => (
    <PublicLayout
      heading={
        <PublicLayout.Heading>
          <h1>Reset your password</h1>
          <p>Enter the email address tied to your Fortanix account and we will send a secure recovery link.</p>
        </PublicLayout.Heading>
      }
      productInfoCards={productInfoCards}
    >
      <Form action={noopFormAction}>
        <FormLayout>
          <InputField
            label="Work email"
            type="email"
            description="We will only send reset links to verified organization addresses."
          />
          <SubmitButton label="Send reset link" />
          <Link href="#">Return to sign in</Link>
        </FormLayout>
      </Form>
    </PublicLayout>
  ),
};

export const MaintenanceNotice: Story = {
  render: () => (
    <PublicLayout
      heading={
        <PublicLayout.Heading>
          <h1>Maintenance in progress</h1>
          <p>Authentication remains available while service-wide updates roll out in the background.</p>
        </PublicLayout.Heading>
      }
      productInfoCards={productInfoCards}
    >
      <FormLayout>
        <Banner variant="info" compact={false} title="Expected impact">
          Administrators can continue signing in, but account provisioning and solution switching may take longer than
          usual for the next fifteen minutes.
        </Banner>
        <Link href="#">View the live status page</Link>
      </FormLayout>
    </PublicLayout>
  ),
};
