import type { Meta, StoryObj } from '@storybook/react'
import { InputView, defaultProps } from './view'

const meta = {
  title: 'Form/Input',
  component: InputView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
