import preview from '../../../../.storybook/preview.tsx';

import { ProgressBar } from './ProgressBar.tsx';

const meta = preview.meta({
  title: 'AI Generated/Simple/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Cluster backup',
    progress: 48,
  },
});

export default meta;

export const InProgress = meta.story({
  args: {
    hintText: 'Uploading encrypted shards',
  },
});

export const Complete = meta.story({
  args: {
    progress: 100,
    hintText: 'Finished a moment ago',
  },
});
