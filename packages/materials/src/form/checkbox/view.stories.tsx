import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxView, defaultProps } from './view'

const meta = {
  title: 'Base/Checkbox',
  component: CheckboxView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
