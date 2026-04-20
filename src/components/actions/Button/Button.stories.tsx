import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { Button } from './Button.tsx';


const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    label: 'Save policy',
    onPress: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Save policy' });
    
    await expect(button).toBeVisible();
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(16, 100, 178)');
    
    await userEvent.click(button);
    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    kind: 'secondary',
    icon: 'download',
    label: 'Download report',
    onPress: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Download report' });
    
    await expect(button).toBeVisible();
    await expect(button.querySelector('svg')).toBeVisible();
    
    await userEvent.click(button);
    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    kind: 'primary',
    label: 'Deploy changes',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Deploy changes' });
    
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');
  },
};
