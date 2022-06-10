
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Loader from './Loader'

expect.extend(toHaveNoViolations)

describe('Loader', () => {

	it('should render a loader', () => {
		render(<Loader/>)
		expect(screen.getAllByTitle('Loading...')).toHaveLength(1)
	})

	it('should not fail any accessibility tests', async () => { 
		const { container } = render(<Loader/>)
		expect(await axe(container)).toHaveNoViolations()
	})

})