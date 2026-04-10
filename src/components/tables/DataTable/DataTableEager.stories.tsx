import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import type { Column } from 'react-table';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { generateData, type User } from '../util/generateData.ts';

import {
  DataTableEager,
  DataTablePlaceholderEmpty,
  Search,
  TableProviderEager,
} from './DataTableEager.tsx';

const meta = {
  component: TableProviderEager,
} satisfies Meta<typeof TableProviderEager<User>>;

export default meta;

type Story = StoryObj<typeof meta>;

const users = generateData({ numItems: 18, seed: 'storybook-eager-users' });
const searchableName = users[0]?.name ?? 'No user';

export const SearchableTable: Story = {
  render: () => (
    <LayoutDecorator size="x-large">
      <EagerTable items={users} includeSearch />
    </LayoutDecorator>
  ),
  play: async ({ canvas, userEvent }) => {
    const search = canvas.getByRole('searchbox');

    await userEvent.clear(search);
    await userEvent.type(search, searchableName);

    await waitFor(() => {
      expect(canvas.getByText(searchableName)).toBeVisible();
    });
  },
};

export const PaginatedTable: Story = {
  render: () => (
    <LayoutDecorator size="x-large">
      <EagerTable
        items={users}
        initialState={{ pageIndex: 0, pageSize: 5 }}
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /go to next page/i }));

    await expect(canvas.getByRole('spinbutton')).toHaveValue(2);
  },
};

export const EmptyState: Story = {
  render: () => (
    <LayoutDecorator size="x-large">
      <EagerTable
        items={[]}
        placeholderEmpty={(
          <DataTablePlaceholderEmpty
            subtitle="Adjust the current filters to see more results."
          />
        )}
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/^no items$/i)).toBeVisible();
    await expect(canvas.getByText(/adjust the current filters/i)).toBeVisible();
  },
};

type EagerTableProps = {
  items: User[];
  includeSearch?: boolean;
  initialState?: Partial<import('react-table').TableState<User>>;
  placeholderEmpty?: React.ReactNode;
};

const EagerTable = ({
  items,
  includeSearch = false,
  initialState,
  placeholderEmpty,
}: EagerTableProps) => {
  return (
    <TableProviderEager<User>
      columns={columns}
      getRowId={(item) => item.id}
      initialState={initialState}
      items={items}
    >
      {includeSearch && <Search />}
      <DataTableEager placeholderEmpty={placeholderEmpty} />
    </TableProviderEager>
  );
};

const columns: Column<User>[] = [
  {
    Header: 'Name',
    accessor: 'name',
    disableGlobalFilter: false,
    disableSortBy: false,
  },
  {
    Header: 'Company',
    accessor: 'company',
    disableGlobalFilter: false,
    disableSortBy: false,
  },
  {
    Header: 'Email',
    accessor: 'email',
    disableGlobalFilter: false,
    disableSortBy: false,
  },
];
