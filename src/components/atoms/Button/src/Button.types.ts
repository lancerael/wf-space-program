import { Status } from '../../../../types/global.types'


export interface ButtonProps extends Pick<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'onMouseOver' | 'onMouseOut' | 'disabled' | 'children'> {
  /**
   * It denotes the status of the button
   */
  status?: Status
}
