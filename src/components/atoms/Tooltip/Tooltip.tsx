import React from 'react'
import { StyledTooltip } from './styles/Tooltip.style'
import { TooltipProps } from './Tooltip.types'

const Tooltip = ({ text, status }: TooltipProps): JSX.Element => {
	return <StyledTooltip {...{status}} data-selector='tooltip'>{text}</StyledTooltip>
}

export default Tooltip
