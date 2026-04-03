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
        Baklava is a design system built for Fortanix products.
      </Accordion.Item>
      <Accordion.Item title="How do I get started?">
        Install the package and wrap your app with BaklavaProvider.
      </Accordion.Item>
      <Accordion.Item title="Is it open source?">
        Yes, Baklava is available under the Mozilla Public License 2.0.
      </Accordion.Item>
    </Accordion>
  ),
};

export const NonExclusive: Story = {
  render: () => (
    <Accordion exclusive={false}>
      <Accordion.Item title="Section A">
        Content for section A. Multiple sections can be open at once.
      </Accordion.Item>
      <Accordion.Item title="Section B">
        Content for section B.
      </Accordion.Item>
      <Accordion.Item title="Section C">
        Content for section C.
      </Accordion.Item>
    </Accordion>
  ),
};
