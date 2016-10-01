import 'normalize.css'
import 'react-toolbox/lib/commons.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import AppBar from 'react-toolbox/lib/app_bar'
import { Button } from 'react-toolbox/lib/button'
import { Layout, Panel } from 'react-toolbox/lib/layout'
import { Screen, Stack } from 'react-toolbox-screen-stack'

const Padded = ({ children }) => <div style={{ padding: '15px', flex: '1 1 auto', overflow: 'auto' }}>{children}</div>

class Home extends React.Component {
	render() {
		// use "Screen" as a way to create a quick AppBar
		return <Screen title="Home">
			<Padded>
				<p>This is the home screen</p>
				<Button primary raised
					label="About >"
					onClick={() => this.props.stack.push(<About />)} />
			</Padded>
		</Screen>
	}
}

class About extends React.Component {
	render() {
		// return your own layouts to use:
		return <Layout>
			<Panel>
				<AppBar title="About" />
				<Padded>
					<p>This is the about screen</p>
					<Button primary raised
						label="< Home"
						onClick={() => this.props.stack.pop()} />
				</Padded>
			</Panel>
		</Layout>
	}
}

window.addEventListener('load', function () {
	ReactDOM.render(<Stack><Home /></Stack>, document.getElementById('react'))
})
