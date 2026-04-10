import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Accordion } from './Accordion.tsx';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderAccordion = (exclusive = true) => (
  <Accordion exclusive={exclusive}>
    <Accordion.Item open title="Access policies">
      Review the policy assignments for the workspace.
    </Accordion.Item>
    <Accordion.Item title="Rotation settings">
      Configure certificate and key rotation windows.
    </Accordion.Item>
    <Accordion.Item title="Audit exports">
      Export the latest audit records for compliance review.
    </Accordion.Item>
  </Accordion>
);

export const ExclusiveSections: Story = {
  render: () => renderAccordion(),
  play: async ({ canvas }) => {
    const firstSection = canvas.getByText('Access policies').closest('details');
    const secondSection = canvas.getByText('Rotation settings').closest('details');

    await expect(firstSection).toHaveAttribute('open');
    await expect(secondSection).not.toHaveAttribute('open');

    await userEvent.click(canvas.getByText('Rotation settings'));

    await expect(firstSection).not.toHaveAttribute('open');
    await expect(secondSection).toHaveAttribute('open');
    await expect(canvas.getByText('Configure certificate and key rotation windows.')).toBeVisible();
  },
};

export const NonExclusiveSections: Story = {
  render: () => renderAccordion(false),
  play: async ({ canvas }) => {
    const firstSection = canvas.getByText('Access policies').closest('details');
    const secondSection = canvas.getByText('Rotation settings').closest('details');

    await userEvent.click(canvas.getByText('Rotation settings'));

    await expect(firstSection).toHaveAttribute('open');
    await expect(secondSection).toHaveAttribute('open');
    await expect(canvas.getByText('Configure certificate and key rotation windows.')).toBeVisible();
  },
};

export const InitiallyExpanded: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item open title="Deployment checklist">
        Verify the change window, release notes, and rollback instructions before continuing.
      </Accordion.Item>
      <Accordion.Item title="Support contacts">
        Share the primary and backup on-call contacts for the release.
      </Accordion.Item>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    const firstSection = canvas.getByText('Deployment checklist').closest('details');
    const secondSection = canvas.getByText('Support contacts').closest('details');

    await expect(firstSection).toHaveAttribute('open');
    await expect(canvas.getByText('Verify the change window, release notes, and rollback instructions before continuing.')).toBeVisible();
    await expect(secondSection).not.toHaveAttribute('open');
  },
};
