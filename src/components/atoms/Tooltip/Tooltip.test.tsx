
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Tooltip from './Tooltip'
import { Status } from '@/types/global.types'

expect.extend(toHaveNoViolations)

const defaultProps = {
	text: 'Test',
	status: 'default' as Status,
}

describe('Tooltip', () => {

	it('should render a Tooltip', () => {
		render(<Tooltip {...defaultProps}/>)
		expect(screen.getAllByText('Test')).toHaveLength(1)
	})

	it('should not fail any accessibility tests', async () => { 
		const { container } = render(<Tooltip {...defaultProps}/>)
		expect(await axe(container)).toHaveNoViolations()
	})

})