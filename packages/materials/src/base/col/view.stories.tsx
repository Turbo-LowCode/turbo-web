import type { Meta, StoryObj } from '@storybook/react'
import { ColView, defaultProps } from './view'

const meta = {
  title: 'Base/Row',
  component: ColView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
