import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Button } from '../../actions/Button/Button.tsx';
import { Icon } from '../Icon/Icon.tsx';
import { PlaceholderEmpty, PlaceholderEmptyAction } from './PlaceholderEmpty.tsx';


const meta = {
  component: PlaceholderEmpty,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PlaceholderEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyProjects: Story = {
  args: {
    icon: 'projects',
    title: 'No projects yet',
    subtitle: 'Create a project to start grouping accounts and policies.',
    actions: (
      <PlaceholderEmptyAction>
        <Button kind="tertiary" label="Create project" onPress={fn()} />
      </PlaceholderEmptyAction>
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No projects yet')).toBeVisible();
    await expect(canvas.getByText(/grouping accounts/i)).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Create project' })).toBeVisible();
  },
};

export const SmallSearchState: Story = {
  args: {
    size: 'small',
    icon: 'search',
    title: 'No matching results',
    subtitle: 'Try a broader account or policy filter.',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No matching results')).toBeVisible();
    await expect(canvas.getByText(/broader account/i)).toBeVisible();
  },
};

export const CustomIcon: Story = {
  args: {
    customIcon: <Icon icon="cloud-connection" />,
    title: 'Connector unavailable',
    subtitle: 'The cloud connector is not installed for this workspace.',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Connector unavailable')).toBeVisible();
    await expect(canvas.getByText(/not installed/i)).toBeVisible();
  },
};
