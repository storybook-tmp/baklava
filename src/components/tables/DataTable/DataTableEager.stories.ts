import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Column } from 'react-table';

import { DataTableEager, Search, TableProviderEager } from './DataTableEager.tsx';


type AccountRow = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: string;
};

type DataTableStoryProps = {
  items: AccountRow[];
};

const meta = {
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableStory,
} satisfies Meta<typeof DataTableStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: getDefaultItems(),
  },
};

export const EmptyState: Story = {
  args: {
    items: [],
  },
};

function DataTableStory({ items }: DataTableStoryProps) {
  return React.createElement(
    'div',
    { style: { maxWidth: '72rem' } },
    React.createElement(
      TableProviderEager<AccountRow>,
      {
        columns,
        getRowId: row => row.id,
        items,
      },
      React.createElement(Search, {
        inputProps: { 'aria-label': 'Search accounts' },
        style: { marginBlockEnd: '1rem', maxWidth: '20rem' },
      }),
      React.createElement(DataTableEager<AccountRow>, {
        'aria-label': 'Accounts table',
      }),
    ),
  );
}

const columns: Column<AccountRow>[] = [
  {
    Header: 'Name',
    accessor: 'name',
    bkColumnWidth: { flex: 2, width: '14rem' },
  },
  {
    Header: 'Email',
    accessor: 'email',
    bkColumnWidth: { flex: 3, width: '18rem' },
  },
  {
    Header: 'Company',
    accessor: 'company',
    bkColumnWidth: { flex: 2, width: '14rem' },
  },
  {
    Header: 'Status',
    accessor: 'status',
    bkColumnWidth: { flex: 1, width: '10rem' },
  },
];

function getDefaultItems(): AccountRow[] {
  return [
    {
      company: 'Fortanix',
      email: 'anand@fortanix.example',
      id: 'acct-001',
      name: 'Anand Kashyap',
      status: 'Healthy',
    },
    {
      company: 'Armor Labs',
      email: 'riley@armor.example',
      id: 'acct-002',
      name: 'Riley Chen',
      status: 'Needs review',
    },
    {
      company: 'Northstar Bank',
      email: 'jordan@northstar.example',
      id: 'acct-003',
      name: 'Jordan Rivera',
      status: 'Healthy',
    },
    {
      company: 'Acme Payments',
      email: 'sam@acme.example',
      id: 'acct-004',
      name: 'Sam Patel',
      status: 'Action required',
    },
  ];
}
