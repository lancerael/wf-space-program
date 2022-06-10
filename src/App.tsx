import React from 'react'
import AdvancedButton from '@/components/molecules/AdvancedButton'

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

const App = () => (
	<>
		<div>
      Api 1s response.<br/>
			<AdvancedButton {...defaultProps}/>
			<br/><br/>
		</div>
		<div>
      Api 5s response.<br/>
			<AdvancedButton {...defaultProps} endpoint='./fake-api/5000'/>
			<br/><br/>
		</div>
		<div>
      Api 5s response, 2s timeout.<br/>
			<AdvancedButton {...defaultProps} endpoint='./fake-api/5000' timeout={2000}/>
			<br/><br/>
		</div>
		<div>
      Api 500 response.<br/>
			<AdvancedButton {...defaultProps} endpoint='./fake-api/100000'/>
			<br/><br/>
		</div>
		<div>
      Api broken URI.<br/>
			<AdvancedButton {...defaultProps} endpoint='http://broken'/>
			<br/><br/>
		</div>
		<div>
      Button disabled.<br/>
			<AdvancedButton {...defaultProps} disabled={true}/>
			<br/><br/>
		</div>
		<div>
      Pending state.<br/>
			<AdvancedButton {...defaultProps} defaultStatus='pending'/>
			<br/><br/>
		</div>
		<div>
      Error state.<br/>
			<AdvancedButton {...defaultProps} defaultStatus='error'/>
			<br/><br/>
		</div>
	</>
)
export default App
