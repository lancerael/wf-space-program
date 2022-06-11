import React from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

const Button = ({ children, ...buttonProps }: ButtonProps) => (
	<StyledButton {...buttonProps}>
		{ children }
	</StyledButton>
)

export default Button