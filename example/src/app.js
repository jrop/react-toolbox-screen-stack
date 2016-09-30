import 'normalize.css'
import 'react-toolbox/lib/commons.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'react-toolbox/lib/button'
import { Screen, Stack } from 'react-toolbox-screen-stack'

const Padded = ({ children }) => <div style={{ padding: '15px' }}>{children}</div>

class Home extends React.Component {
	render() {
		return <Screen title="Home">
			<Padded>
				<p>This is the home screen</p>
				<Button primary raised
					label="About >"
					onClick={() => this.context.stack.push(<About />)} />
			</Padded>
		</Screen>
	}
}
Home.contextTypes = {
	stack: React.PropTypes.object,
}

class About extends React.Component {
	render() {
		return <Screen title="About">
			<Padded>
				<p>This is the about screen</p>
				<Button primary raised
					label="< Home"
					onClick={() => this.context.stack.pop()} />
			</Padded>
		</Screen>
	}
}
About.contextTypes = {
	stack: React.PropTypes.object,
}

window.addEventListener('load', function () {
	ReactDOM.render(<Stack><Home /></Stack>, document.getElementById('react'))
})
