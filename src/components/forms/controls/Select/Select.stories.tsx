import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

import { Select } from './Select.tsx';


const regionLabels: Record<string, string> = {
  'us-west-2': 'US West 2',
  'eu-central-1': 'EU Central 1',
  'ap-south-1': 'AP South 1',
};

const meta = {
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Region: Story = {
  args: {
    label: 'Cloud region',
    name: 'region',
    defaultSelected: 'us-west-2',
    formatItemLabel: itemKey => regionLabels[itemKey] ?? itemKey,
    options: (
      <>
        <Select.Header itemKey="primary" label="Primary regions" />
        <Select.Option itemKey="us-west-2" label="US West 2" icon="cloud-accounts" />
        <Select.Option itemKey="eu-central-1" label="EU Central 1" icon="cloud-accounts" />
        <Select.Option itemKey="ap-south-1" label="AP South 1" icon="cloud-accounts" />
      </>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    const combobox = canvas.getByRole('combobox');
    
    await expect(combobox).toHaveValue('US West 2');
    await userEvent.click(combobox);
    
    await expect(canvas.getByRole('option', { name: 'EU Central 1' })).toBeVisible();
    await userEvent.click(canvas.getByRole('option', { name: 'EU Central 1' }));
    
    await waitFor(async () => {
      await expect(combobox).toHaveValue('EU Central 1');
    });
  },
};

export const WithFooterAction: Story = {
  args: {
    label: 'Account',
    name: 'account',
    defaultSelected: 'production',
    formatItemLabel: itemKey => ({
      production: 'Production',
      staging: 'Staging',
    })[itemKey] ?? itemKey,
    options: (
      <>
        <Select.Option itemKey="production" label="Production" icon="account" />
        <Select.Option itemKey="staging" label="Staging" icon="account" />
        <Select.FooterActions>
          <Select.Action itemKey="create-account" label="Create account" icon="install" onActivate={() => {}} />
        </Select.FooterActions>
      </>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('combobox')).toHaveValue('Production');
    
    await userEvent.click(canvas.getByRole('combobox'));
    await expect(canvas.getByRole('button', { name: 'Create account' })).toBeVisible();
  },
};

export const Empty: Story = {
  args: {
    label: 'Cloud account',
    options: null,
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('combobox'));
    
    await expect(canvas.getByText('No items')).toBeVisible();
  },
};
