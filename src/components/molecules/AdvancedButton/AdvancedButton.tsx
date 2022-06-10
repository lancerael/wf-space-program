import React, { useState, useMemo, useEffect } from 'react'
import { apiRequestStatus, abortRequestStatus } from '@/helpers/apiRequestStatus'
import { generateKey } from '@/helpers/generateKey'
import { AdvancedButtonProps } from './AdvancedButton.types'
import { STATUS_MAP } from '@/constants'
import Loader from '@/components/atoms/Loader'
import { Status } from '@/components/atoms/Tooltip/Tooltip.types'
import Tooltip from '@/components/atoms/Tooltip'
import Button from '@/components/atoms/Button'

const AdvancedButton = ({
  defaultStatus = 'default',
  disabled = false,
  timeout = undefined,
  endpoint,
  labels,
  tooltips,
}: AdvancedButtonProps): JSX.Element => {
  const [status, setStatus] = useState<Status>(defaultStatus)
  const [hover, setHover] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const requestKey = useMemo(generateKey, [])

  useEffect(() => {
    if (status==='error' || hover) setIsTooltipVisible(true)
    else setIsTooltipVisible(false)
  }, [status, hover])

  const onClick = async () => {
    if (status==='pending') {
      abortRequestStatus(requestKey)
      setStatus('error')
      return
    }
    setStatus('pending')
    const apiStatus = await apiRequestStatus(endpoint, requestKey, timeout)
    setStatus(STATUS_MAP[apiStatus] as Status)
  }

  const onMouseOver = () => setHover(true)

  const onMouseOut = () => setHover(false)
  
  return (
    <Button {...{onClick, onMouseOver, onMouseOut, status, disabled}}>
      {labels[status]}
      {status==='pending' && <Loader/>}
      { isTooltipVisible && <Tooltip status={status} text={tooltips[status]}/> }
    </Button>
  )
}

export default AdvancedButton