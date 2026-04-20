import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Tag } from '../../text/Tag/Tag.tsx';
import { PropertyList } from './PropertyList.tsx';


const meta = {
  component: PropertyList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PropertyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountProperties: Story = {
  render: () => (
    <PropertyList>
      <PropertyList.Property label="Account" value="Production account" />
      <PropertyList.Property label="Region" value="US West 2" />
      <PropertyList.Property label="Status" value={<Tag content="Connected" />} />
    </PropertyList>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Account')).toBeVisible();
    await expect(canvas.getByText('Production account')).toBeVisible();
    await expect(canvas.getByText('Connected')).toBeVisible();
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: (
      <>
        <PropertyList.Property label="Owner" value="Security Operations" />
        <PropertyList.Property label="Last sync" value="5 minutes ago" />
        <PropertyList.Property label="Connector" value="AWS Organizations" />
      </>
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Owner')).toBeVisible();
    await expect(canvas.getByText('Security Operations')).toBeVisible();
    await expect(canvas.getByText('AWS Organizations')).toBeVisible();
  },
};

export const Expandable: Story = {
  render: () => (
    <PropertyList orientation="vertical">
      <PropertyList.Property
        expandable
        clampLines={2}
        label="Policy summary"
        value="This policy allows the security operations team to inspect cloud account activity, rotate service keys, and export audit evidence for quarterly access reviews."
      />
    </PropertyList>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('Policy summary')).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'View more' })).toBeVisible();
    
    await userEvent.click(canvas.getByRole('button', { name: 'View more' }));
    await expect(canvas.getByRole('button', { name: 'View less' })).toBeVisible();
  },
};
