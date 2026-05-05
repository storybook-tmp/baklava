import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { CheckboxField } from '../../fields/CheckboxField/CheckboxField.tsx';
import { InputField } from '../../fields/InputField/InputField.tsx';
import { SubmitButton } from '../SubmitButton/SubmitButton.tsx';
import { FormLayout } from '../../../../layouts/FormLayout/FormLayout.tsx';
import { Form } from './Form.tsx';

const meta = {
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

const ProjectFormStory = () => {
  const [submittedName, setSubmittedName] = React.useState<string | null>(null);

  return (
    <FormLayout>
      <Form
        action={async (formData) => {
          setSubmittedName(String(formData.get('projectName') ?? ''));
        }}
      >
        <InputField
          name="projectName"
          label="Project name"
          description="Use the same project label shown in the workspace sidebar."
        />
        <SubmitButton label="Create project" />
      </Form>
      {submittedName && <p>Created project: {submittedName}</p>}
    </FormLayout>
  );
};

const NestedFormStory = () => {
  const [submittedOwner, setSubmittedOwner] = React.useState<string | null>(null);

  return (
    <FormLayout>
      <Form
        nestable
        action={async (formData) => {
          setSubmittedOwner(String(formData.get('owner') ?? ''));
        }}
      >
        <InputField
          name="owner"
          label="Owner"
          description="Assign a primary owner for this environment."
        />
        <SubmitButton label="Save owner" />
      </Form>
      {submittedOwner && <p>Saved owner: {submittedOwner}</p>}
    </FormLayout>
  );
};

const CheckboxFormStory = () => {
  const [saved, setSaved] = React.useState(false);

  return (
    <FormLayout>
      <Form
        action={async (formData) => {
          setSaved(formData.get('notifications') === 'on');
        }}
      >
        <CheckboxField
          name="notifications"
          label="Send deployment notifications"
          description="Notify the release channel when deployment begins."
          title="Release notifications"
          titleTooltip="These notifications are sent to the shared deployment channel."
        />
        <SubmitButton label="Save preferences" />
      </Form>
      {saved && <p>Notifications enabled</p>}
    </FormLayout>
  );
};

export const SubmissionFlow: Story = {
  render: () => <ProjectFormStory />,
  play: async ({ canvas }) => {
    const projectName = canvas.getByLabelText('Project name', { selector: 'input' });

    await userEvent.type(projectName, 'Gamma workspace');
    await userEvent.click(canvas.getByRole('button', { name: 'Create project' }));

    await waitFor(() => {
      expect(canvas.getByText('Created project: Gamma workspace')).toBeVisible();
    });
  },
};

export const Nestable: Story = {
  render: () => <NestedFormStory />,
  play: async ({ canvas }) => {
    const owner = canvas.getByLabelText('Owner', { selector: 'input' });

    await userEvent.type(owner, 'Platform Team');
    await userEvent.click(canvas.getByRole('button', { name: 'Save owner' }));

    await waitFor(() => {
      expect(canvas.getByText('Saved owner: Platform Team')).toBeVisible();
    });
  },
};

export const CheckboxWithTooltip: Story = {
  render: () => <CheckboxFormStory />,
  play: async ({ canvas, canvasElement }) => {
    const documentBody = within(canvasElement.ownerDocument.body);
    const titleIcon = canvas.getByText('Release notifications').parentElement?.querySelector('svg');

    if (!titleIcon) {
      throw new Error('Missing tooltip icon for the checkbox field title.');
    }

    await userEvent.hover(titleIcon);
    await waitFor(() => {
      expect(documentBody.getByText('These notifications are sent to the shared deployment channel.')).toBeVisible();
    });

    await userEvent.click(canvas.getByLabelText('Send deployment notifications'));
    await expect(canvas.getByLabelText('Send deployment notifications')).toBeChecked();

    await userEvent.click(canvas.getByRole('button', { name: 'Save preferences' }));

    await waitFor(() => {
      expect(canvas.getByText('Notifications enabled')).toBeVisible();
    });
  },
};
