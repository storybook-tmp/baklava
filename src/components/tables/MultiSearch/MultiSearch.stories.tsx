import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Panel } from '../../containers/Panel/Panel.tsx';

import * as FQ from './filterQuery.ts';
import { MultiSearch } from './MultiSearch.tsx';

const meta = {
  component: MultiSearch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MultiSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

const searchFields: FQ.Fields = {
  name: {
    label: 'Name',
    placeholder: 'Search operators',
    type: 'text',
    operators: ['$text', '$eq'],
  },
  status: {
    label: 'Status',
    type: 'enum',
    operators: ['$eq', '$in', '$nin'],
    alternatives: {
      healthy: { label: 'Healthy' },
      warning: { label: 'Needs review' },
      offline: { label: 'Offline' },
    },
  },
  teamSize: {
    label: 'Team size',
    type: 'number',
    operators: ['$eq', '$gte', '$lte'],
  },
  createdAt: {
    label: 'Created',
    type: 'datetime',
    operators: ['$gte', '$lte', '$range'],
    selectedDate: [new Date('2026-04-01T08:00:00Z'), new Date('2026-04-03T18:00:00Z')],
  },
};

const toFieldQuery = (fieldQuery: FQ.FieldQuery | null): FQ.FieldQuery[] => (fieldQuery ? [fieldQuery] : []);

const preloadedFilters = [
  ...toFieldQuery(FQ.encodeFieldQuery('status', ['warning'], '$in', null, searchFields)),
  ...toFieldQuery(FQ.encodeFieldQuery('teamSize', '25', '$gte', null, searchFields)),
];

const dateRangeFilters = toFieldQuery(
  FQ.encodeFieldQuery(
    'createdAt',
    [
      Math.floor(new Date('2026-04-01T08:00:00Z').valueOf() / 1000),
      Math.floor(new Date('2026-04-03T18:00:00Z').valueOf() / 1000),
    ],
    '$range',
    null,
    searchFields,
  ),
);

type MultiSearchSceneProps = {
  initialFilters?: FQ.FilterQuery;
};

const MultiSearchScene = ({ initialFilters = FQ.createFilterQuery() }: MultiSearchSceneProps) => {
  const [filters, setFilters] = React.useState(initialFilters);

  return (
    <Panel style={{ inlineSize: 'min(48rem, 100vw - 2rem)' }}>
      <Panel.Heading>Advanced filters</Panel.Heading>
      <MultiSearch fields={searchFields} filters={filters} query={setFilters} />
    </Panel>
  );
};

export const Default: Story = {
  render: () => <MultiSearchScene />,
};

export const PreloadedFilters: Story = {
  render: () => <MultiSearchScene initialFilters={preloadedFilters} />,
};

export const DateWindow: Story = {
  render: () => <MultiSearchScene initialFilters={dateRangeFilters} />,
};
