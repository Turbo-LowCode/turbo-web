import type { Meta, StoryObj } from '@storybook/react'
import { NumberView, defaultProps } from './view'

const meta = {
  title: 'Form/Number',
  component: NumberView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
