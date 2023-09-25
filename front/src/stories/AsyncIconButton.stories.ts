import type { Meta, StoryObj } from '@storybook/react'

import AsyncIconButton from '../widgets/AsyncIconButton'

import '../index.scss'
import { sleep } from '../misc'
import '../font-awesome'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Gestion Stock/AsyncIconButton',
  component: AsyncIconButton,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof AsyncIconButton>

const waitFor = (delay: number) => async () => {
  console.log('start')
  await sleep(delay)
  console.log('stop')
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Click Me',
    icon: 'plus',
    asyncCallback: waitFor(2000),
  },
  argTypes: {
    icon: {
      options: ['plus', 'trash-can'],
      control: { type: 'select' },
    },
  },
}
