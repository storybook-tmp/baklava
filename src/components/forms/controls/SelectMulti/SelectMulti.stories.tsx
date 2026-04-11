import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SelectMulti } from './SelectMulti.tsx';
import { ListBoxMulti } from '../ListBoxMulti/ListBoxMulti.tsx';

const meta = {
  component: SelectMulti,
} satisfies Meta<typeof SelectMulti>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SelectMulti
      label="Select Multiple Options"
      options={
        <>
          <ListBoxMulti.Item itemKey="option1">Option 1</ListBoxMulti.Item>
          <ListBoxMulti.Item itemKey="option2">Option 2</ListBoxMulti.Item>
          <ListBoxMulti.Item itemKey="option3">Option 3</ListBoxMulti.Item>
        </>
      }
    />
  ),
  play: async ({ canvas }: { canvas: any }) => {
    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toBeVisible();
  },
};

export const WithDefaultSelected: Story = {
  render: () => (
    <SelectMulti
      label="Select Multiple Options"
      defaultSelected={new Set(['option1'])}
      options={
        <>
          <ListBoxMulti.Item itemKey="option1">Option 1</ListBoxMulti.Item>
          <ListBoxMulti.Item itemKey="option2">Option 2</ListBoxMulti.Item>
          <ListBoxMulti.Item itemKey="option3">Option 3</ListBoxMulti.Item>
        </>
      }
    />
  ),
  play: async ({ canvas }: any) => {
    const combobox = canvas.getByRole('combobox') as HTMLInputElement;
    await expect(combobox).toBeVisible();
  },
};

export const Disabled: Story = {
  render: () => (
    <SelectMulti
      label="Disabled Select"
      disabled
      options={
        <>
          <ListBoxMulti.Item itemKey="option1">Option 1</ListBoxMulti.Item>
          <ListBoxMulti.Item itemKey="option2">Option 2</ListBoxMulti.Item>
        </>
      }
    />
  ),
  play: async ({ canvas }: any) => {
    const combobox = canvas.getByRole('combobox') as HTMLInputElement;
    await expect(combobox).toBeDisabled();
  },
};

export const WithManyOptions: Story = {
  render: () => (
    <SelectMulti
      label="Select from Many Options"
      options={
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <ListBoxMulti.Item key={`option${i}`} itemKey={`option${i}`}>
              Option {i + 1}
            </ListBoxMulti.Item>
          ))}
        </>
      }
    />
  ),
  play: async ({ canvas }: any) => {
    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toBeVisible();
  },
};
