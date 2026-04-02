import * as React from 'react';
import type * as ReactTable from 'react-table';

import preview from '../../../../.storybook/preview.tsx';

import { DataTableEager, TableProviderEager, type DataTableEagerProps } from './DataTableEager.tsx';

type ClusterRow = {
  id: string,
  name: string,
  status: string,
  region: string,
  requests: number,
};

const meta = preview.meta({
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableEager,
});

export default meta;

export const FleetOverview = meta.story({
  render: args => renderTableStory(args, clusterRows),
});

export const EmptyState = meta.story({
  args: {
    placeholderEmpty: React.createElement(
      'p',
      null,
      'No clusters match the current filters.',
    ),
  },
  render: args => renderTableStory(args, []),
});

function renderTableStory(args: DataTableEagerProps, items: ClusterRow[]) {
  return React.createElement(
    'div',
    {
      style: {
        inlineSize: '72rem',
        maxInlineSize: '100%',
      },
    },
    React.createElement(
      TableProviderEager<ClusterRow>,
      {
        columns: clusterColumns,
        items,
        getRowId: row => row.id,
      },
      React.createElement(DataTableEager, args),
    ),
  );
}

const clusterColumns: Array<ReactTable.Column<ClusterRow>> = [
  {
    Header: 'Cluster',
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
    Header: 'Requests',
    accessor: 'requests',
  },
];

const clusterRows: ClusterRow[] = [
  {
    id: 'cluster-1',
    name: 'Core production',
    status: 'Healthy',
    region: 'us-east-1',
    requests: 1842,
  },
  {
    id: 'cluster-2',
    name: 'Analytics',
    status: 'Scaling',
    region: 'eu-west-1',
    requests: 912,
  },
  {
    id: 'cluster-3',
    name: 'Recovery site',
    status: 'Healthy',
    region: 'ap-southeast-1',
    requests: 408,
  },
];
