import type { Meta, StoryObj } from '@storybook/react'
import { SlotView, defaultProps } from './view'

const meta = {
  title: 'Common/Slot',
  component: SlotView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SlotView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
