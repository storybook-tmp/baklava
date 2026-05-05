import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper.tsx';

const meta = {
  title: 'AI Generated/Complex/Stepper',
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { stepKey: 'step1', title: 'Account Setup' },
  { stepKey: 'step2', title: 'Configuration' },
  { stepKey: 'step3', title: 'Review' },
];

export const Vertical: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('step1');
    return (
      <Stepper steps={steps} activeKey={activeKey} onSwitch={setActiveKey} />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState('step2');
    return (
      <Stepper
        steps={[
          { stepKey: 's1', title: 'Upload' },
          { stepKey: 's2', title: 'Process' },
          { stepKey: 's3', title: 'Done', isOptional: true },
        ]}
        activeKey={activeKey}
        onSwitch={setActiveKey}
        direction="horizontal"
      />
    );
  },
};
