import { STATUS_COLOURS } from '../../../../constants'
import styled, { css } from 'styled-components'

import { StyledButtonProps } from './Button.style.types'

export const StyledButton = styled.button(({ status }: StyledButtonProps) => css`
  font-size: 1em;
  text-align: center;
  border: 2px solid ${STATUS_COLOURS[status]};
  color:  ${STATUS_COLOURS[status]};
  background-color: white;
  width: 220px;
  padding: 15px 15px 13px 15px;
  margin: 15px;
  cursor: pointer;
  &:disabled {
    color: grey;
    cursor: default;
  }
`)
