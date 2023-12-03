import type { Meta, StoryObj } from '@storybook/react'
import { LinkView, defaultProps } from './view'

const meta = {
  title: 'AntD/Link',
  component: LinkView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
