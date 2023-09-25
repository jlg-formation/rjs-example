import type { Meta, StoryObj } from '@storybook/react'
import AsyncIconButton from '../widgets/AsyncIconButton'
import '../index.scss'
import { sleep } from '../misc'
import '../font-awesome'

const meta = {
  title: 'Gestion Stock/AsyncIconButton',
  component: AsyncIconButton,
  tags: ['autodocs'],
  parameters: {
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
