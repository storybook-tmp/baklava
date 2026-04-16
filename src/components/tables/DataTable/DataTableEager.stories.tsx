import type { Meta, StoryObj } from '@storybook/react-vite';
import type * as ReactTable from 'react-table';

import { Panel } from '../../containers/Panel/Panel.tsx';
import { generateData, type User } from '../util/generateData.ts';

import {
  DataTableEager,
  Search,
  TableProviderEager,
} from './DataTableEager.tsx';

const meta = {
  component: DataTableEager,
} satisfies Meta<typeof DataTableEager>;

export default meta;
type Story = StoryObj<typeof meta>;

const tableItems = generateData({ numItems: 24, seed: 'datatable-storybook' });

const columns: Array<ReactTable.Column<User>> = [
  {
    Header: 'Name',
    accessor: 'name',
    bkColumnWidth: { width: '16ch', flex: 2 },
  },
  {
    Header: 'Company',
    accessor: 'company',
    bkColumnWidth: { width: '18ch', flex: 2 },
  },
  {
    Header: 'Email',
    accessor: 'email',
    bkColumnWidth: { width: '22ch', flex: 3 },
  },
  {
    Header: 'Joined',
    id: 'joinDate',
    accessor: row => row.joinDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    bkColumnWidth: { width: '12ch', flex: 1 },
  },
];

type DataTableSceneProps = {
  items: User[];
  stickyColumns?: 'first' | 'last' | 'both';
};

const DataTableScene = ({ items, stickyColumns }: DataTableSceneProps) => (
  <Panel style={{ inlineSize: '100%' }}>
    <Panel.Heading>Project members</Panel.Heading>
    <TableProviderEager columns={columns} getRowId={row => row.id} items={items} stickyColumns={stickyColumns}>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Search placeholder="Search project members" />
        <DataTableEager aria-label="Project members" />
      </div>
    </TableProviderEager>
  </Panel>
);

export const Default: Story = {
  render: () => <DataTableScene items={tableItems} />,
};

export const StickyColumns: Story = {
  render: () => <DataTableScene items={tableItems} stickyColumns="both" />,
};

export const EmptyState: Story = {
  render: () => <DataTableScene items={[]} />,
};
