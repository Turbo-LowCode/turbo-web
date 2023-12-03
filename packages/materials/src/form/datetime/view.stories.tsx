import type { Meta, StoryObj } from '@storybook/react'
import { DateTimePickerView, defaultProps } from './view'

const meta = {
  title: 'Form/DateTimePicker',
  component: DateTimePickerView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateTimePickerView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
