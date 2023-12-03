import type { Meta, StoryObj } from '@storybook/react'
import { SegmentView, defaultProps } from './view'

const meta = {
  title: 'Form/Segment',
  component: SegmentView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
