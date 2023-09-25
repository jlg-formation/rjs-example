import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import HeaderLayout from '../layout/HeaderLayout'

import '../index.scss'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Gestion Stock/HeaderLayout',
  component: HeaderLayout,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof HeaderLayout>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {}
