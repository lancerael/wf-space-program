import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { TooltipProps } from './Tooltip.types'

export default {
  title: 'Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Default',
  status: 'default',
}

export const Pending = Template.bind({})
Pending.args = {
  text: 'Pending',
  status: 'pending',
}

export const Error = Template.bind({})
Error.args = {
  text: 'Error',
  status: 'error',
}