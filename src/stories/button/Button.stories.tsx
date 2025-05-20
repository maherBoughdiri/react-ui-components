
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/buttons/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // 👈 enable auto-docs
  args: {
    children: 'Click Me',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};