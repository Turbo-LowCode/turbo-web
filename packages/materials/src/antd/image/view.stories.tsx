import type { Meta, StoryObj } from '@storybook/react'
import { ImageView, defaultProps } from './view'

const meta = {
  title: 'AntD/Image',
  component: ImageView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
