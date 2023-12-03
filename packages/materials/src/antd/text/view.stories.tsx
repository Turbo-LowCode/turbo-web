import type { Meta, StoryObj } from '@storybook/react'
import { TextView, defaultProps } from './view'

const meta = {
  title: 'AntD/Text',
  component: TextView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
