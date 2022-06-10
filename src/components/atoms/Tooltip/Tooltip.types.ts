export type Status = 'default' | 'pending' | 'error'

export interface TooltipProps {
  text: string
  status: Status
}