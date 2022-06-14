import { MouseEventHandler } from 'react'
import { Status } from '../../../../types/global.types'


export interface ButtonProps {
  /**
   * A handler for the button click event
   */
  onClick: MouseEventHandler
  /**
   * A handler for the mouse over event
   */
  onMouseOver?: MouseEventHandler
  /**
   * A handler for the mouse out event
   */
  onMouseOut?: MouseEventHandler
  /**
   * It denotes the status of the button
   */
  status?: Status
  /**
   * Disables the button
   */
  disabled?: boolean
  /**
   * Children for inside the button
   */
  children: ValidChild | ValidChild[]
}

type ValidChild = JSX.Element | string | false
