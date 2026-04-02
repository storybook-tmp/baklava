import type { Meta, StoryObj } from '@storybook/react';
import { DataTableEager, TableProviderEager } from './DataTableEager';
import { useMemo } from 'react';
import type { ColumnDef } from 'react-table';

const meta = {
  title: 'AI Generated/Complex/DataTable',
  component: DataTableEager,
} satisfies Meta<typeof DataTableEager>;

export default meta;
type Story = StoryObj<typeof meta>;

interface DataItem {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const Default: Story = {
  render: (args) => {
    const columns = useMemo<ColumnDef<DataItem>[]>(
      () => [
        {
          id: 'name',
          accessorKey: 'name',
          header: 'Name',
        },
        {
          id: 'email',
          accessorKey: 'email',
          header: 'Email',
        },
        {
          id: 'role',
          accessorKey: 'role',
          header: 'Role',
        },
      ],
      []
    );

    const data: DataItem[] = [
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        role: 'Admin',
      },
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        role: 'User',
      },
      {
        id: '3',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        role: 'User',
      },
    ];

    return (
      <TableProviderEager
        columns={columns}
        items={data}
        getRowId={(row) => row.id}
      >
        <DataTableEager />
      </TableProviderEager>
    );
  },
};

export const MultipleRows: Story = {
  render: (args) => {
    const columns = useMemo<ColumnDef<DataItem>[]>(
      () => [
        {
          id: 'id',
          accessorKey: 'id',
          header: 'ID',
        },
        {
          id: 'name',
          accessorKey: 'name',
          header: 'Name',
        },
        {
          id: 'email',
          accessorKey: 'email',
          header: 'Email',
        },
        {
          id: 'role',
          accessorKey: 'role',
          header: 'Role',
        },
      ],
      []
    );

    const data: DataItem[] = Array.from({ length: 10 }, (_, i) => ({
      id: String(i + 1),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 2 === 0 ? 'Admin' : 'User',
    }));

    return (
      <TableProviderEager
        columns={columns}
        items={data}
        getRowId={(row) => row.id}
      >
        <DataTableEager />
      </TableProviderEager>
    );
  },
};
