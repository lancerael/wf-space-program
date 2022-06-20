import React from 'react'
import { StyledTooltip } from './Tooltip.style'
import { TooltipProps } from './Tooltip.types'

export const Tooltip = ({ text, status = 'default' }: TooltipProps): JSX.Element => {
  return <StyledTooltip {...{status}} data-selector='wf-tooltip'>{text}</StyledTooltip>
}

export default Tooltip
