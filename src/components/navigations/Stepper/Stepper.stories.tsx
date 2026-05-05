import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as React from 'react';

import { Stepper } from './Stepper.tsx';

const steps = [
  { stepKey: 'account', title: 'Create account' },
  { stepKey: 'profile', title: 'Set up profile' },
  { stepKey: 'preferences', title: 'Choose preferences' },
  { stepKey: 'review', title: 'Review & confirm' },
];

const meta = {
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('profile');
    return (
      <Stepper
        steps={steps}
        activeKey={activeKey}
        onSwitch={setActiveKey}
        direction="vertical"
        aria-label="Setup steps"
      />
    );
  },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: /setup steps/i });
    await expect(nav).toBeVisible();
    const activeStep = canvas.getByRole('listitem', { current: 'step' });
    await expect(activeStep).toBeVisible();
  },
};

export const Horizontal: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('account');
    return (
      <Stepper
        steps={steps}
        activeKey={activeKey}
        onSwitch={setActiveKey}
        direction="horizontal"
        aria-label="Onboarding steps"
      />
    );
  },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: /onboarding steps/i });
    await expect(nav).toBeVisible();
    await expect(canvas.getByText(/create account/i)).toBeVisible();
    await expect(canvas.getByText(/review & confirm/i)).toBeVisible();
  },
};

export const StepNavigation: Story = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('account');
    return (
      <Stepper
        steps={steps}
        activeKey={activeKey}
        onSwitch={setActiveKey}
        direction="vertical"
        aria-label="Progress steps"
      />
    );
  },
  play: async ({ canvas, userEvent }) => {
    const profileStepButton = canvas.getByText(/set up profile/i).closest('button');
    await expect(profileStepButton).toBeVisible();
    await userEvent.click(profileStepButton!);
    const activeStep = canvas.getByRole('listitem', { current: 'step' });
    await expect(activeStep).toHaveTextContent(/set up profile/i);
  },
};
