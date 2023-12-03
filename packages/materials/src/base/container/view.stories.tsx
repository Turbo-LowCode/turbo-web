import type { Meta, StoryObj } from '@storybook/react'
import { ProviderView, defaultProps } from './view'

const meta = {
  title: 'Base/Provider',
  component: ProviderView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProviderView>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  args: {
    ...defaultProps,
  },
}
