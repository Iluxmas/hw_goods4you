import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import '../../../index.css';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string',
      description: 'Label for the input',
      defaultValue: 'Input Label',
      control: 'text',
    },
    value: {
      type: 'string',
      description: 'Value of the input',
      defaultValue: '',
      control: 'text',
    },
    isError: {
      type: 'boolean',
      description: 'Indicates if the input has an error',
      defaultValue: false,
      control: 'boolean',
    },
    textArea: {
      type: 'boolean',
      description: 'Indicates if the input should be a textarea',
      defaultValue: false,
      control: 'boolean',
    },
    disabled: {
      type: 'boolean',
      description: 'Indicates if the input is disabled',
      defaultValue: false,
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    label: 'Input Label',
    value: 'default input',
    isError: false,
    textArea: false,
    disabled: false,
    onChange: (e) => console.log(e),
  },
} satisfies Story;

export const TextArea = {
  args: {
    label: 'Textarea Label',
    value:
      'TextArea variant is an input with a lot of text, for example product description or comment section',
    isError: false,
    textArea: true,
    disabled: false,
    onChange: (e) => console.log(e),
  },
} satisfies Story;

export const Disabled = {
  args: {
    label: 'Disabled Input',
    value: 'Text in disabled input',
    isError: false,
    textArea: false,
    disabled: true,
    onChange: (e) => console.log(e),
  },
} satisfies Story;

export const Error = {
  args: {
    label: 'Error Input',
    value: 'err value',
    isError: true,
    textArea: false,
    disabled: false,
    onChange: (e) => console.log(e),
  },
} satisfies Story;
