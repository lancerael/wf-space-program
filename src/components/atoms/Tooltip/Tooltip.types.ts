import { Status } from '@/types/global.types'

export interface TooltipProps {
  /**
   * The text to display in the tooltip
   */
  text: string
  /**
   * It denotes the status of the button
   */
  status?: Status
}
