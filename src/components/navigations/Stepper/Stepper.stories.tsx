import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper.tsx';

const meta = {
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { stepKey: 'account', title: 'Create account' },
  { stepKey: 'profile', title: 'Set up profile' },
  { stepKey: 'security', title: 'Configure security' },
  { stepKey: 'review', title: 'Review & confirm' },
];

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('profile');
    return <Stepper steps={steps} activeKey={activeKey} onSwitch={setActiveKey} />;
  },
};

export const Horizontal: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('security');
    return (
      <Stepper
        steps={steps}
        activeKey={activeKey}
        onSwitch={setActiveKey}
        direction="horizontal"
      />
    );
  },
};

export const WithOptionalSteps: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('basics');
    return (
      <Stepper
        steps={[
          { stepKey: 'basics', title: 'Basic info' },
          { stepKey: 'details', title: 'Details', isOptional: true },
          { stepKey: 'confirm', title: 'Confirm' },
        ]}
        activeKey={activeKey}
        onSwitch={setActiveKey}
      />
    );
  },
};
