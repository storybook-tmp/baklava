import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import type { Column, TableState } from 'react-table';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { generateData, type User } from '../util/generateData.ts';

import {
  DataTableLazy,
  TableProviderLazy,
  type DataTableQuery,
  type DataTableQueryResult,
} from './DataTableLazy.tsx';

const meta = {
  component: TableProviderLazy,
} satisfies Meta<typeof TableProviderLazy<User>>;

export default meta;

type Story = StoryObj<typeof meta>;

const users = generateData({ numItems: 13, seed: 'storybook-lazy-users' });

export const LoadsResults: Story = {
  render: () => (
    <LayoutDecorator size="x-large">
      <LazyTable
        query={async ({ offset, limit }) => {
          await delay(120);
          return createPage(offset, limit);
        }}
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(canvas.getByText(users[0]?.name ?? '')).toBeVisible();
    });
    await expect(canvas.getByRole('button', { name: /go to next page/i })).toBeVisible();
  },
};

export const PaginatedQuery: Story = {
  render: () => (
    <LayoutDecorator size="x-large">
      <LazyTable
        initialState={{ pageSize: 5 }}
        query={async ({ offset, limit }) => {
          await delay(80);
          return createPage(offset, limit);
        }}
      />
    </LayoutDecorator>
  ),
  play: async ({ canvas, userEvent }) => {
    const secondPageFirstUser = users[5]?.name ?? '';

    await waitFor(() => {
      expect(canvas.getByText(users[0]?.name ?? '')).toBeVisible();
    });

    await userEvent.click(canvas.getByRole('button', { name: /go to next page/i }));

    await waitFor(() => {
      expect(canvas.getByText(secondPageFirstUser)).toBeVisible();
    });
    await expect(canvas.getByRole('spinbutton')).toHaveValue(2);
  },
};

export const ErrorRecovery: Story = {
  render: () => {
    const Example = () => {
      const attemptRef = React.useRef(0);

      return (
        <LayoutDecorator size="x-large">
          <LazyTable
            query={async ({ offset, limit }) => {
              attemptRef.current += 1;

              await delay(80);

              if (attemptRef.current === 1) {
                throw new Error('Query failed');
              }

              return createPage(offset, limit);
            }}
          />
        </LayoutDecorator>
      );
    };

    return <Example />;
  },
  play: async ({ canvas, userEvent }) => {
    await waitFor(() => {
      expect(canvas.getByText(/failed to load items/i)).toBeVisible();
    });

    await userEvent.click(canvas.getByRole('button', { name: /retry/i }));

    await waitFor(() => {
      expect(canvas.getByText(users[0]?.name ?? '')).toBeVisible();
    });
  },
};

type LazyTableProps = {
  query: DataTableQuery<User>;
  initialState?: Partial<TableState<User>>;
};

const LazyTable = ({ query, initialState }: LazyTableProps) => {
  const [items, setItems] = React.useState<DataTableQueryResult<User>>({
    total: 0,
    itemsPage: [],
  });

  return (
    <TableProviderLazy<User>
      columns={columns}
      getRowId={(item) => item.id}
      initialState={initialState ?? { pageSize: 10 }}
      items={items}
      query={query}
      updateItems={setItems}
    >
      <DataTableLazy />
    </TableProviderLazy>
  );
};

const columns: Column<User>[] = [
  {
    Header: 'Name',
    accessor: 'name',
    disableSortBy: false,
  },
  {
    Header: 'Company',
    accessor: 'company',
    disableSortBy: false,
  },
  {
    Header: 'Email',
    accessor: 'email',
    disableSortBy: false,
  },
];

const createPage = (offset: number, limit: number): DataTableQueryResult<User> => ({
  total: users.length,
  itemsPage: users.slice(offset, offset + limit),
});

const delay = async (timeMs: number) => {
  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, timeMs);
  });
};
