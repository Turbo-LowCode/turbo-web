import type { Meta, StoryObj } from '@storybook/react'
import { FormItemView, defaultProps } from './view'

const meta = {
  title: 'Base/FormItem',
  component: FormItemView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormItemView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
