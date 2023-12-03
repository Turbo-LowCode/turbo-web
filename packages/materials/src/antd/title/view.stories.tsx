import type { Meta, StoryObj } from '@storybook/react'
import { TitleView, defaultProps } from './view'

const meta = {
  title: 'AntD/Title',
  component: TitleView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
