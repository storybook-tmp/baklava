import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="What is Baklava?">
        Baklava is a design system by Fortanix for building consistent user interfaces.
      </Accordion.Item>
      <Accordion.Item title="How do I get started?">
        Install the package and wrap your app in the BaklavaProvider component.
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
        Content for section A. Multiple sections can be open at the same time.
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

export const SingleItem: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item title="Advanced settings">
        Configure advanced settings for your application. These options are intended for
        experienced users who need fine-grained control.
      </Accordion.Item>
    </Accordion>
  ),
};
