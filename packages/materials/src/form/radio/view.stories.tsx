import type { Meta, StoryObj } from '@storybook/react'
import { RadioView, defaultProps } from './view'

const meta = {
  title: 'Form/Radio',
  component: RadioView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
