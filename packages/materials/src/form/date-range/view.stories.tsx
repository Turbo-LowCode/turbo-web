import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePickerView, defaultProps } from './view'

const meta = {
  title: 'Form/DateRangePicker',
  component: DateRangePickerView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePickerView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
