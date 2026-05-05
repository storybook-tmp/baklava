import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion.tsx';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="What is Baklava?">
        <p>Baklava is a design system by Fortanix for building consistent and accessible user interfaces.</p>
      </Accordion.Item>
      <Accordion.Item title="How do I get started?">
        <p>Install the package from npm and import the components you need.</p>
      </Accordion.Item>
      <Accordion.Item title="Is it open source?">
        <p>Yes, Baklava is licensed under the Mozilla Public License 2.0.</p>
      </Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  render: () => (
    <Accordion exclusive={false}>
      <Accordion.Item title="Section A">
        <p>Multiple sections can be open at the same time.</p>
      </Accordion.Item>
      <Accordion.Item title="Section B">
        <p>This section can stay open while Section A is also open.</p>
      </Accordion.Item>
      <Accordion.Item title="Section C">
        <p>All three sections can be expanded simultaneously.</p>
      </Accordion.Item>
    </Accordion>
  ),
};
