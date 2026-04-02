import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTableEager, TableProviderEager } from './DataTableEager.tsx';
import type { Column } from 'react-table';

type Row = { id: string; name: string; status: string; role: string };

const columns: Column<Row>[] = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Role', accessor: 'role' },
];

const sampleItems: Row[] = [
  { id: '1', name: 'Alice', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Bob', status: 'Inactive', role: 'User' },
  { id: '3', name: 'Charlie', status: 'Active', role: 'Editor' },
  { id: '4', name: 'Diana', status: 'Active', role: 'Admin' },
  { id: '5', name: 'Eve', status: 'Pending', role: 'User' },
];

const meta = {
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableEager,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <TableProviderEager<Row>
        columns={columns}
        items={sampleItems}
        getRowId={(row) => row.id}
      >
        <Story />
      </TableProviderEager>
    ),
  ],
} satisfies Meta<typeof DataTableEager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const EmptyTable: Story = {
  decorators: [
    (Story) => (
      <TableProviderEager<Row>
        columns={columns}
        items={[]}
        getRowId={(row) => row.id}
      >
        <Story />
      </TableProviderEager>
    ),
  ],
  args: {},
};
