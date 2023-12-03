import type { Meta, StoryObj } from '@storybook/react'
import { ButtonView, defaultProps } from './view'

const meta = {
  title: 'AntD/Button',
  component: ButtonView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
