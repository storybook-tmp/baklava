import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextLine } from './TextLine.tsx';


const meta = {
  component: TextLine,
} satisfies Meta<typeof TextLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ margin: '2rem', maxWidth: '12rem' }}>
      <TextLine>
        Anand Kashyap - Very Long Name That Will Overflow
      </TextLine>
    </div>
  ),
};
