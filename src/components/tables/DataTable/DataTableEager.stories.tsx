import type { Meta, StoryObj } from '@storybook/react-vite';

import type { Column } from 'react-table';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { DataTableEager, Search as DataTableSearch, TableProviderEager } from './DataTableEager.tsx';

type ProjectRow = {
  id: string,
  name: string,
  owner: string,
  status: string,
  region: string,
};

const columns: Array<Column<ProjectRow>> = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Owner',
    accessor: 'owner',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Region',
    accessor: 'region',
  },
];

const populatedItems: Array<ProjectRow> = [
  { id: 'proj-1', name: 'Accounts API', owner: 'Platform', status: 'Healthy', region: 'us-west-2' },
  { id: 'proj-2', name: 'Key Rotation', owner: 'Security', status: 'Needs review', region: 'eu-central-1' },
  { id: 'proj-3', name: 'Audit Export', owner: 'Compliance', status: 'Scheduled', region: 'ap-southeast-1' },
  { id: 'proj-4', name: 'Tenant Setup', owner: 'Operations', status: 'In progress', region: 'us-east-1' },
];

const DataTableStory = ({
  items,
  searchPlaceholder,
  ...props
}: React.ComponentProps<typeof DataTableEager> & {
  items: Array<ProjectRow>,
  searchPlaceholder?: string,
}) => {
  return (
    <LayoutDecorator size="x-large">
      <TableProviderEager<ProjectRow>
        columns={columns}
        items={items}
        getRowId={row => row.id}
      >
        <div style={{ marginBottom: '1rem' }}>
          <DataTableSearch placeholder={searchPlaceholder} inputProps={{ 'aria-label': 'Search projects' }} />
        </div>
        <DataTableEager {...props} />
      </TableProviderEager>
    </LayoutDecorator>
  );
};

const meta = {
  title: 'AI Generated/Complex/DataTableEager',
  component: DataTableEager,
  args: {
    'aria-label': 'Projects table',
  },
} satisfies Meta<typeof DataTableEager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <DataTableStory
      {...args}
      items={populatedItems}
      searchPlaceholder="Search projects"
    />
  ),
};

export const EmptyState: Story = {
  render: args => (
    <DataTableStory
      {...args}
      items={[]}
      searchPlaceholder="Search empty projects list"
    />
  ),
};
