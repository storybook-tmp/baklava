import { config } from '../../../../.storybook/preview.tsx';
import { Spinner } from './Spinner.tsx';


const meta = config.meta({
  title: 'AI Generated/Simple/Spinner',
  component: Spinner,
});

export const Default = meta.story({
  args: {
    size: 'small',
  },
});

export const LargeInline = meta.story({
  args: {
    inline: true,
    size: 'large',
  },
});
