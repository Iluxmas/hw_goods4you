import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import '../../../index.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    intent: {
      type: 'string',
      description: 'style',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'link', 'outline'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default = {
  args: { text: 'Click Me', intent: 'primary' },
} satisfies Story;
