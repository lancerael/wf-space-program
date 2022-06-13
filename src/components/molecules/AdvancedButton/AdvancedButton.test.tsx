
import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
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

  it.skip('should fire the rocket', () => {
    render(<AdvancedButton {...defaultProps}/>)
    const button = screen.getByRole('button')
    act(() => {
      fireEvent.click(button)
    })
    expect(screen.getAllByText('Launching')).toHaveLength(1)
  })

  it.skip('should cancel the rocket', () => {
    render(<AdvancedButton {...defaultProps}/>)
    const button = screen.getByRole('button')
    act(() => {
      fireEvent.click(button)
    })
    act(() => {
      fireEvent.click(button)
    })
    expect(screen.getAllByText('Ignition error')).toHaveLength(1)
  })

})
