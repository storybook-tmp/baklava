import * as React from 'react';
import type * as ReactTable from 'react-table';

import { config } from '#.storybook/preview';

import { DataTableEager, TableProviderEager } from './DataTableEager.tsx';

type DeploymentRow = {
  id: string,
  name: string,
  status: string,
  owner: string,
};

type DataTableStoryProps = {
  items: DeploymentRow[],
};

const columns: ReactTable.Column<DeploymentRow>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Owner',
    accessor: 'owner',
  },
];

const sampleItems: DeploymentRow[] = [
  { id: 'dep-1', name: 'API Gateway', status: 'Healthy', owner: 'Platform' },
  { id: 'dep-2', name: 'Secrets Manager', status: 'Updating', owner: 'Security' },
  { id: 'dep-3', name: 'Edge Worker', status: 'Healthy', owner: 'Runtime' },
];

const DataTableExample = ({ items }: DataTableStoryProps) => {
  return React.createElement(
    TableProviderEager<DeploymentRow>,
    {
      columns,
      items,
      getRowId: row => row.id,
    },
    React.createElement(DataTableEager<DeploymentRow>, null),
  );
};

const meta = config.meta({
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableEager,
  render: args => React.createElement(DataTableExample, args),
});

export const Default = meta.story({
  args: {
    items: sampleItems,
  },
});

export const Empty = meta.story({
  args: {
    items: [],
  },
});
