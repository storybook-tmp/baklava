import preview from '../../../../.storybook/preview';

import { Accordion } from './Accordion.tsx';

const meta = preview.meta({
  title: 'AI Generated/Complex/Accordion',
  component: Accordion,
  args: {
    style: { inlineSize: '32rem' },
  },
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item open title="Certificate status">
        The certificate inventory is healthy and all renewals are within policy.
      </Accordion.Item>
      <Accordion.Item title="Key rotation">
        The next automated rotation is scheduled for the weekend maintenance window.
      </Accordion.Item>
      <Accordion.Item title="Audit trail">
        Recent operator activity has been captured and forwarded to the compliance archive.
      </Accordion.Item>
    </Accordion>
  ),
});

export default meta;

export const Exclusive = meta.story();

export const MultipleOpen = meta.story({
  args: {
    exclusive: false,
  },
  render: args => (
    <Accordion {...args}>
      <Accordion.Item open title="Certificate status">
        The certificate inventory is healthy and all renewals are within policy.
      </Accordion.Item>
      <Accordion.Item open title="Key rotation">
        The next automated rotation is scheduled for the weekend maintenance window.
      </Accordion.Item>
      <Accordion.Item title="Audit trail">
        Recent operator activity has been captured and forwarded to the compliance archive.
      </Accordion.Item>
    </Accordion>
  ),
});
