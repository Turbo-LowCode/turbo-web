import type { Meta, StoryObj } from '@storybook/react'
import { FormView, defaultProps } from './view'

const meta = {
  title: 'Form/Form',
  component: FormView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
