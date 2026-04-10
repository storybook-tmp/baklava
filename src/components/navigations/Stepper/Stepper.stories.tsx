import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { LayoutDecorator } from '../../../util/storybook/LayoutDecorator.tsx';
import { Stepper } from './Stepper.tsx';

const meta = {
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const steps = [
  { stepKey: 'account', title: 'Account details' },
  { stepKey: 'members', title: 'Team members', isOptional: true },
  { stepKey: 'review', title: 'Review and confirm' },
];

const StepperStory = ({
  initialKey,
  direction = 'vertical',
}: {
  initialKey: string;
  direction?: 'vertical' | 'horizontal';
}) => {
  const [activeKey, setActiveKey] = React.useState(initialKey);

  return (
    <LayoutDecorator size="medium">
      <Stepper aria-label="Workspace setup" steps={steps} activeKey={activeKey} onSwitch={setActiveKey} direction={direction} />
    </LayoutDecorator>
  );
};

export const Default: Story = {
  render: () => <StepperStory initialKey="account" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: 'Workspace setup' })).toBeVisible();
    await expect(canvas.getByText('Team members')).toBeVisible();
  },
};

export const AdvanceStep: Story = {
  render: () => <StepperStory initialKey="account" />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /step 2 team members/i }));
    await expect(canvas.getByRole('listitem', { current: 'step' })).toHaveTextContent('Team members');
  },
};

export const Horizontal: Story = {
  render: () => <StepperStory initialKey="review" direction="horizontal" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('listitem', { current: 'step' })).toHaveTextContent('Review and confirm');
    await expect(canvas.getByText('(Optional)')).toBeVisible();
  },
};
