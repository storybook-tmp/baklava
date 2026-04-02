import type { Column } from 'react-table';

import preview from '../../../../.storybook/preview';

import {
  DataTableEager,
  DataTablePlaceholderEmpty,
  TableProviderEager,
} from './DataTableEager.tsx';

type ClusterRow = {
  id: string;
  name: string;
  owner: string;
  status: string;
};

const columns: Array<Column<ClusterRow>> = [
  {
    Header: 'Name',
    accessor: 'name',
    bkColumnWidth: { flex: 2, width: '16rem' },
  },
  {
    Header: 'Status',
    accessor: 'status',
    bkColumnWidth: { flex: 1, width: '10rem' },
  },
  {
    Header: 'Owner',
    accessor: 'owner',
    bkColumnWidth: { flex: 1, width: '12rem' },
  },
];

const rows: Array<ClusterRow> = [
  {
    id: 'cluster-1',
    name: 'Production west',
    owner: 'Platform team',
    status: 'Healthy',
  },
  {
    id: 'cluster-2',
    name: 'Staging east',
    owner: 'Developer experience',
    status: 'Updating',
  },
  {
    id: 'cluster-3',
    name: 'Disaster recovery',
    owner: 'Security engineering',
    status: 'Standby',
  },
];

const meta = preview.meta({
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableEager,
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <div style={{ maxInlineSize: '48rem' }}>
      <TableProviderEager<ClusterRow>
        columns={columns}
        items={rows}
        getRowId={row => row.id}
      >
        <DataTableEager {...args} />
      </TableProviderEager>
    </div>
  ),
});

export default meta;

export const Default = meta.story();

export const EmptyState = meta.story({
  render: args => (
    <div style={{ maxInlineSize: '48rem' }}>
      <TableProviderEager<ClusterRow>
        columns={columns}
        items={[]}
        getRowId={row => row.id}
      >
        <DataTableEager
          {...args}
          placeholder={
            <DataTablePlaceholderEmpty
              title="No clusters matched"
              subtitle="Try widening the filters or clearing the current query."
            />
          }
        />
      </TableProviderEager>
    </div>
  ),
});
