import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AdvancedButton from './AdvancedButton'
import { AdvancedButtonProps } from './AdvancedButton.types'

export default {
  title: 'AdvancedButton',
  component: AdvancedButton,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  }
} as ComponentMeta<typeof AdvancedButton>

const Template: ComponentStory<typeof AdvancedButton> = (args: AdvancedButtonProps) => <AdvancedButton {...args} />

export const Default = Template.bind({})
Default.args = {
  labels: {
    default: 'Launch Rocket',
    error: 'Launch Rocket',
    pending: 'Launching',
  },
  tooltips: {
    default: 'Ignites the fuel',
    error: 'Ignition error',
    pending: 'Cancel launch',
  },
  endpoint: 'https://httpbin.org/delay/2',
}