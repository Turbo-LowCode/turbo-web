import type { Meta, StoryObj } from '@storybook/react'
import { SwitchView, defaultProps } from './view'

const meta = {
  title: 'Form/Switch',
  component: SwitchView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SwitchView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
