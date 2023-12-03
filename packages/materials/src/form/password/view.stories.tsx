import type { Meta, StoryObj } from '@storybook/react'
import { PasswordView, defaultProps } from './view'

const meta = {
  title: 'Form/Password',
  component: PasswordView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
