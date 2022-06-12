import { STATUS_COLOURS } from '@/constants'
import { standardFont } from '@/styles'
import styled, { css } from 'styled-components'

import { StyledTooltipProps } from './Tooltip.style.types'

export const StyledTooltip = styled.div(({ status }: StyledTooltipProps) => css`
  ${standardFont}
  background-color: ${STATUS_COLOURS[status]};
  color: white;
  width: 170px;
  padding: 32px 8px 8px 8px;
  position: absolute;
  clip-path: polygon(50% 0, 58% 40%, 100% 40%, 100% 100%, 0 100%, 0 40%, 42% 40%);
`)