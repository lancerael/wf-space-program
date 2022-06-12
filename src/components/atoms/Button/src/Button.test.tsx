
import React from 'react'
import Button from './Button'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Status } from '../../../../types/global.types'

expect.extend(toHaveNoViolations)

const defaultProps = {
  onClick: jest.fn(),
  onMouseOver: jest.fn(),
  onMouseOut: jest.fn(),
  status: 'default' as Status | undefined,
  disabled: false,
  children: 'Hello'
}

describe('Button', () => {

  it('should render a button', () => {
    render(<Button {...defaultProps}/>)
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<Button {...defaultProps}/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
