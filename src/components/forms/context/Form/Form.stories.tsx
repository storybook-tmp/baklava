import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

import { LayoutDecorator } from '../../../../util/storybook/LayoutDecorator.tsx';
import { InputField } from '../../fields/InputField/InputField.tsx';
import { SubmitButton } from '../SubmitButton/SubmitButton.tsx';

import { Form } from './Form.tsx';

const meta = {
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateAccount: Story = {
  render: () => {
    const Example = () => {
      const [submittedName, setSubmittedName] = React.useState<string | null>(null);

      return (
        <LayoutDecorator size="small">
          <Form
            action={async (formData) => {
              setSubmittedName(String(formData.get('accountName') ?? ''));
            }}
          >
            <InputField
              name="accountName"
              label="Account name"
              description="Use the name your operators will recognize."
              defaultValue="Armor Platform"
            />
            <SubmitButton label="Create account" />
            {submittedName && <p>Created account: {submittedName}</p>}
          </Form>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText(/account name/i, { selector: 'input' });

    await userEvent.clear(input);
    await userEvent.type(input, 'Baklava Production');
    await userEvent.click(canvas.getByRole('button', { name: /create account/i }));

    await expect(canvas.getByText(/created account: baklava production/i)).toBeVisible();
  },
};

export const AsyncSubmission: Story = {
  render: () => {
    const Example = () => {
      const [status, setStatus] = React.useState('Waiting for submission');

      return (
        <LayoutDecorator size="small">
          <Form
            action={async (formData) => {
              setStatus('Submitting');

              await new Promise<void>((resolve) => {
                window.setTimeout(resolve, 200);
              });

              setStatus(`Provisioned ${String(formData.get('environment') ?? '')}`);
            }}
          >
            <InputField
              name="environment"
              label="Environment"
              defaultValue="Development"
            />
            <SubmitButton label="Provision environment" />
            <p>{status}</p>
          </Form>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: /provision environment/i });

    await userEvent.click(button);

    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await waitFor(() => {
      expect(canvas.getByText(/provisioned development/i)).toBeVisible();
    });
  },
};

export const Nestable: Story = {
  render: () => {
    const Example = () => {
      const [result, setResult] = React.useState<string | null>(null);

      return (
        <LayoutDecorator size="small">
          <Form
            nestable
            action={async (formData) => {
              setResult(String(formData.get('projectName') ?? ''));
            }}
          >
            <InputField
              name="projectName"
              label="Project name"
              defaultValue="Key Rotation"
            />
            <SubmitButton label="Save project" />
            {result && <p>Saved project: {result}</p>}
          </Form>
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText(/project name/i, { selector: 'input' });

    await userEvent.clear(input);
    await userEvent.type(input, 'Secrets Inventory');
    await userEvent.click(canvas.getByRole('button', { name: /save project/i }));

    await waitFor(() => {
      expect(canvas.getByText(/saved project: secrets inventory/i)).toBeVisible();
    });
  },
};
