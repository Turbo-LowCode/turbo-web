import type { Meta, StoryObj } from '@storybook/react'
import { CardView } from './view'

const meta = {
  title: 'AntD/Card',
  component: CardView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    // ...defaultProps,
    title: '卡片标题',
  },
}
