import Icon from '@/components/Icon/index';
import { type Meta, type StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    color: 'gray.900',
    name: 'arrow-back',
  },
};