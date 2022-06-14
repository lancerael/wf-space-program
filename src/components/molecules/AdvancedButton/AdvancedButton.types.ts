import { Status } from '@/types/global.types'

export interface AdvancedButtonProps{
  /**
   * Override for status of the advanced button
   */
  defaultStatus?: Status
  /**
   * Disables the button
   */
  disabled?: boolean,
  /**
   * Disables the buttonTimeout for the API request in ms
   */
  timeout?: number,
  /**
   * The URI for the API endpoint
   */
  endpoint: string,
  /**
   * A copymap for the labels by status
   */
  labels: CopyMap,
  /**
   * A copymap for the tooltips by status
   */
  tooltips: CopyMap,
}

export interface CopyMap {
  default: string,
  pending: string,
  error: string
}
