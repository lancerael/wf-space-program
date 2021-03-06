import React from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button = ({ children, status = 'default', ...buttonProps }: ButtonProps) => (
  <StyledButton {...{status, ...buttonProps}} data-selector='wf-button'>
    { children }
  </StyledButton>
)

export default Button
