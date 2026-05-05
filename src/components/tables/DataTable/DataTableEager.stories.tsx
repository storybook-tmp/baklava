import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import type { Column } from 'react-table';

import { Panel } from '../../containers/Panel/Panel.tsx';
import { generateData, type User } from '../util/generateData.ts';
import { DataTableEager, Search, TableProviderEager } from './DataTableEager.tsx';

const meta = {
  component: DataTableEager,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DataTableEager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {
  render: () =>
    renderTableStory({
      title: 'Managed identities',
      rows: generateData({ numItems: 12, seed: 'storybook-default-table' }),
      controls: <Search placeholder="Search by name or email" />,
    }),
};

export const PaginatedResults: Story = {
  render: () =>
    renderTableStory({
      title: 'Recent certificate activity',
      rows: generateData({ numItems: 32, seed: 'storybook-paginated-table' }),
      controls: <Search placeholder="Search activity" />,
      initialState: { pageSize: 5, pageIndex: 0 },
    }),
};

export const EmptyState: Story = {
  render: () =>
    renderTableStory({
      title: 'Archived assets',
      rows: [],
      controls: <Search placeholder="Search archived assets" />,
    }),
};

function renderTableStory(args: {
  title: string;
  rows: User[];
  controls?: ReactNode;
  initialState?: {
    pageSize?: number;
    pageIndex?: number;
  };
}) {
  const { title, rows, controls, initialState } = args;

  return (
    <div style={{ padding: '2rem' }}>
      <Panel>
        <Panel.Heading>{title}</Panel.Heading>
        <TableProviderEager<User>
          columns={userColumns}
          items={rows}
          getRowId={row => row.id}
          initialState={initialState}
        >
          {controls}
          <DataTableEager />
        </TableProviderEager>
      </Panel>
    </div>
  );
}

const userColumns: Column<User>[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Company',
    accessor: 'company',
  },
  {
    Header: 'Joined',
    accessor: 'joinDate',
    Cell: ({ value }) => formatJoinDate(value as Date),
  },
];

function formatJoinDate(value: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(value);
}
