import preview from '../../../../../.storybook/preview';

import { Input } from './Input.tsx';

const meta = preview.meta({
  title: 'AI Generated/Medium/Input',
  component: Input,
  args: {
    style: { inlineSize: '20rem' },
  },
  parameters: {
    layout: 'centered',
  },
});

export default meta;

export const SearchField = meta.story({
  args: {
    'aria-label': 'Search query',
    placeholder: 'Search certificates',
    icon: 'search',
    iconLabel: 'Search',
    defaultValue: 'production',
  },
});

export const ReadOnlyEndpoint = meta.story({
  args: {
    'aria-label': 'Service endpoint',
    prefix: 'https://',
    defaultValue: 'api.fortanix.test',
    readOnly: true,
  },
});
