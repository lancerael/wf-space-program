
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import AdvancedButton from './AdvancedButton'


expect.extend(toHaveNoViolations)

const defaultProps = {
  labels: {
    default: 'Launch Rocket',
    error: 'Launch Rocket',
    pending: 'Launching',
  },
  tooltips: {
    default: 'Ignites the fuel',
    error: 'Ignition error',
    pending: 'Cancel launch',
  },
  endpoint: './fake-api/1000',
}

describe('AdvancedButton', () => {

  it('should render a AdvancedButton', () => {
    render(<AdvancedButton {...defaultProps}/>)
    expect(screen.getAllByText('Launch Rocket')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<AdvancedButton {...defaultProps}/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
