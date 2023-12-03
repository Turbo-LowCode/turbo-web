import type { Meta, StoryObj } from '@storybook/react'
import { RowView, defaultProps } from './view'

const meta = {
  title: 'Base/Row',
  component: RowView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RowView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
