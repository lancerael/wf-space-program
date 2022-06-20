import React, { useState, useMemo, useEffect } from 'react'
import { apiRequestStatus, abortRequestStatus } from '@/helpers/apiRequestStatus'
import { generateKey } from '@/helpers/generateKey'
import { AdvancedButtonProps } from './AdvancedButton.types'
import { STATUS_MAP } from '@/constants'
import Loader from '@/components/atoms/Loader'
import Tooltip from '@/components/atoms/Tooltip'
import Button from '@/components/atoms/Button/src'
import { Status } from '@/types/global.types'

const AdvancedButton = ({
  defaultStatus = 'default',
  disabled = false,
  timeout = undefined,
  endpoint,
  labels,
  tooltips,
}: AdvancedButtonProps): JSX.Element => {
  const buttonStatus = disabled ? 'default' : defaultStatus
  const requestKey = useMemo(generateKey, [])
  const [status, setStatus] = useState<Status>(buttonStatus)
  const [hover, setHover] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(status === 'error' && disabled === false)

  useEffect(() => {
    if (disabled) return
    setIsTooltipVisible(status==='error' || hover)
  }, [status, hover])

  useEffect(() => {
    setStatus(buttonStatus)
    setIsTooltipVisible(disabled ? false : isTooltipVisible)
  }, [defaultStatus, disabled])

  const onClick = async () => {
    if (disabled) return
    if (status==='pending') {
      abortRequestStatus(requestKey)
      setStatus('error')
      return
    }
    setStatus('pending')
    const apiStatus = await apiRequestStatus(endpoint, requestKey, timeout)
    if (apiStatus) setStatus(STATUS_MAP[apiStatus] as Status)
  }

  const onMouseOver = () => setHover(true)

  const onMouseOut = () => setHover(false)
  
  return (
    <Button {...{onClick, onMouseOver, onMouseOut, status, disabled}}>
      { labels[status] }
      { status==='pending' && <Loader/> }
      { isTooltipVisible && <Tooltip status={status} text={tooltips[status]}/> }
    </Button>
  )
}

export default AdvancedButton
