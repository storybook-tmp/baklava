import type { Meta, StoryObj } from '@storybook/react-vite';

import { Panel } from '../../../containers/Panel/Panel.tsx';
import { TextAreaWithFileUpload } from './TextAreaWithFileUpload.tsx';


const meta = {
  component: TextAreaWithFileUpload,
} satisfies Meta<typeof TextAreaWithFileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel style={{ maxWidth: '48rem', margin: '2rem' }}>
      <Panel.Heading>Panel</Panel.Heading>
      <TextAreaWithFileUpload
        defaultValue="Paste a note here, or drop a text file into the field."
        accept=".txt,.json"
        enableDragAndDrop={true}
        rows={10}
      />
    </Panel>
  ),
};
