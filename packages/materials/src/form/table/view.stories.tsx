import type { Meta, StoryObj } from '@storybook/react'
import { TableView, defaultProps } from './view'

const meta = {
  title: 'Form/Table',
  component: TableView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
