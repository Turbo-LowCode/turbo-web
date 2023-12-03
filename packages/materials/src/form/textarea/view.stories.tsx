import type { Meta, StoryObj } from '@storybook/react'
import { TextAreaView, defaultProps } from './view'

const meta = {
  title: 'Form/TextArea',
  component: TextAreaView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextAreaView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
