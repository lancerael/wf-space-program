import { MouseEventHandler } from "react"
import { Status } from "../Tooltip/Tooltip.types"

type ValidChild = JSX.Element | string | false

export interface ButtonProps {
  onClick: MouseEventHandler
  onMouseOver: MouseEventHandler
  onMouseOut: MouseEventHandler
  status: Status
  disabled: boolean
  children: ValidChild | ValidChild[]
}