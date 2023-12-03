import type { Meta, StoryObj } from '@storybook/react'
import { BoxView, defaultProps } from './view'

const meta = {
  title: 'Base/Box',
  component: BoxView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BoxView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
