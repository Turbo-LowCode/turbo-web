import type { Meta, StoryObj } from '@storybook/react'
import { SliderView, defaultProps } from './view'

const meta = {
  title: 'Form/Slider',
  component: SliderView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SliderView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
