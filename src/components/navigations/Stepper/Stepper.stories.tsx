import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper.tsx';

const meta = {
  title: 'AI Generated/Complex/Stepper',
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    activeKey: 'step2',
    onSwitch: () => {},
    steps: [
      { stepKey: 'step1', title: 'Account Setup' },
      { stepKey: 'step2', title: 'Profile Information' },
      { stepKey: 'step3', title: 'Review & Submit' },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    activeKey: 'step1',
    onSwitch: () => {},
    steps: [
      { stepKey: 'step1', title: 'Select Plan' },
      { stepKey: 'step2', title: 'Payment', isOptional: true },
      { stepKey: 'step3', title: 'Confirmation' },
      { stepKey: 'step4', title: 'Done', isDisabled: true },
    ],
  },
};
