import { Meta, StoryObj } from '@storybook/react';
import Cart from './Cart';
import { MemoryRouter } from 'react-router-dom';
import '../../../index.css';

export default {
  title: 'Cart',
  component: Cart,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    total: {
      type: 'number',
      description: 'Goods in cart',
      defaultValue: 0,
      options: [0, 1, 5, 10],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<typeof Cart>;

type Story = StoryObj<typeof Cart>;

export const Default = {
  args: {
    total: 0,
  },
  parameters: {
    backgrounds: { default: 'purple' },
  },
} satisfies Story;
