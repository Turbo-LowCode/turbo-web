import type { Meta, StoryObj } from '@storybook/react'
import { DateTimeRangePickerView, defaultProps } from './view'

const meta = {
  title: 'Form/DateTimeRangePicker',
  component: DateTimeRangePickerView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateTimeRangePickerView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
