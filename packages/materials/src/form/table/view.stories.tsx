import type { Meta, StoryObj } from '@storybook/react'
import { ProTableView, defaultProps } from './view'

const meta = {
  title: 'Form/ProTable',
  component: ProTableView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProTableView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
