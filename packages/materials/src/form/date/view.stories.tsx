import type { Meta, StoryObj } from '@storybook/react'
import { DatePickerView, defaultProps } from './view'

const meta = {
  title: 'Form/DatePicker',
  component: DatePickerView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePickerView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
