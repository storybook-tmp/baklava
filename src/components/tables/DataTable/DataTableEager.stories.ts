import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Column } from 'react-table';

import { DataTableEager, Search, TableProviderEager } from './DataTableEager.tsx';


const meta = {
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableEager,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: React.createElement(Search, {
      placeholder: 'Search deployments',
      style: { marginBottom: '1rem', width: '20rem' },
    }),
  },
  render: args => renderTableStory(sampleRows, args),
} satisfies Meta<typeof DataTableEager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyState: Story = {
  args: {
    placeholderEmpty: React.createElement(
      'div',
      null,
      'No deployments match the current filters.',
    ),
  },
  render: args => renderTableStory([], args),
};

type DeploymentRow = {
  id: string,
  name: string,
  status: string,
  region: string,
  updated: string,
};

const columns: Column<DeploymentRow>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Region',
    accessor: 'region',
  },
  {
    Header: 'Updated',
    accessor: 'updated',
  },
];

const sampleRows: DeploymentRow[] = [
  { id: 'dep-1', name: 'alpha-api', status: 'Healthy', region: 'us-east-1', updated: '2 minutes ago' },
  { id: 'dep-2', name: 'billing-worker', status: 'Progressing', region: 'eu-west-1', updated: '8 minutes ago' },
  { id: 'dep-3', name: 'audit-stream', status: 'Degraded', region: 'ap-southeast-1', updated: '15 minutes ago' },
];

function renderTableStory(
  rows: DeploymentRow[],
  args: React.ComponentProps<typeof DataTableEager>,
): React.ReactElement {
  return React.createElement(
    'div',
    { style: { padding: '1.5rem' } },
    React.createElement(
      TableProviderEager<DeploymentRow>,
      {
        columns,
        items: rows,
        getRowId: row => row.id,
      },
      React.createElement(DataTableEager, args),
    ),
  );
}
