import { Status } from '@/types/global.types'

export interface CopyMap {
  default: string,
  pending: string,
  error: string
}

export interface AdvancedButtonProps{
  defaultStatus?: Status,
  disabled?: boolean,
  timeout?: number | undefined,
  endpoint: string,
  labels: CopyMap,
  tooltips: CopyMap,
}