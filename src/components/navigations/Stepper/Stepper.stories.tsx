import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper.tsx';

const meta = {
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { stepKey: 'account', title: 'Create Account' },
  { stepKey: 'profile', title: 'Setup Profile' },
  { stepKey: 'review', title: 'Review & Submit' },
];

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('profile');
    return (
      <Stepper
        steps={steps}
        activeKey={activeKey}
        direction="vertical"
        onSwitch={setActiveKey}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('profile');
    return (
      <Stepper
        steps={steps}
        activeKey={activeKey}
        direction="horizontal"
        onSwitch={setActiveKey}
      />
    );
  },
};

export const WithOptionalStep: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('details');
    return (
      <Stepper
        steps={[
          { stepKey: 'basics', title: 'Basic Info' },
          { stepKey: 'details', title: 'Details' },
          { stepKey: 'extras', title: 'Additional Info', isOptional: true },
          { stepKey: 'confirm', title: 'Confirm' },
        ]}
        activeKey={activeKey}
        direction="vertical"
        onSwitch={setActiveKey}
      />
    );
  },
};
