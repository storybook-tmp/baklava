import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch.tsx';

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Switch />,
};

export const On: Story = {
  render: () => <Switch defaultChecked />,
};

export const Labeled: Story = {
  render: () => <Switch.Labeled label="Enable notifications" />,
};
