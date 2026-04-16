import type { Meta, StoryObj } from '@storybook/react-vite';

import { Panel } from './Panel.tsx';

const meta = {
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel style={{ inlineSize: 'min(44rem, 100vw - 2rem)' }}>
      <Panel.Heading>Project summary</Panel.Heading>
      <p>Review the current workspace posture, recent deployment activity, and the next required approval.</p>
    </Panel>
  ),
};

export const Edgeless: Story = {
  render: () => (
    <Panel edgeless style={{ inlineSize: 'min(44rem, 100vw - 2rem)' }}>
      <Panel.Heading>Inline project details</Panel.Heading>
      <p>Use the edgeless treatment when a panel is nested inside another layout region that already provides framing.</p>
    </Panel>
  ),
};

export const ScrollableContent: Story = {
  render: () => (
    <Panel style={{ inlineSize: 'min(44rem, 100vw - 2rem)', maxBlockSize: '18rem' }}>
      <Panel.Heading>Audit highlights</Panel.Heading>
      <p>09:15 UTC - Project Atlas policy bundle passed all preflight checks.</p>
      <p>09:42 UTC - Workspace operators acknowledged the upcoming signing key rotation.</p>
      <p>10:03 UTC - Cloud account connectivity test succeeded after credential refresh.</p>
      <p>10:26 UTC - Staged rollout completed for the canary environment.</p>
      <p>10:41 UTC - Production deployment is waiting on a final approval from Security Engineering.</p>
      <p>10:52 UTC - Audit export was generated for the last deployment review window.</p>
    </Panel>
  ),
};
