import AppBar from 'react-toolbox/lib/app_bar'
import React from 'react'
import style from '../styles/screen.scss'

export default class Screen extends React.Component {
	render() {
		const abProps = Object.assign({ }, this.props)
		delete abProps.children

		return <div className={style.screen}>
			<AppBar {...abProps} />
			<main>
				{this.props.children}
			</main>
		</div>
	}
}
