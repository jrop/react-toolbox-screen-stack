import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import style from '../styles/stack.scss'

export default class Stack extends React.Component {
	constructor(props) {
		super(props)
		let children = Array.isArray(this.props.children) ? this.props.children : [ this.props.children ]
		children = children.map(c => React.cloneElement(c, { stack: this }))
		this.state = { children }
	}

	getChildContext() {
		return { stack: this }
	}

	push(child) {
		child = React.cloneElement(child, { stack: this })

		const children = this.state.children.slice(0)
		children.push(child)
		this.setState({ children })
	}

	pop() {
		const children = this.state.children.slice(0)
		children.pop()
		this.setState({ children })
	}

	render() {
		return <div className={style.stack}>
			<ReactCSSTransitionGroup
				transitionName={{
					enter: style['child-enter'],
					enterActive: style['child-enter-active'],
					leave: style['child-leave'],
					leaveActive: style['child-leave-active'],
				}}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
				{this.state.children.map((c, i) =>
					<div key={i} className={style.child} style={{ zIndex: i }}>
						{c}
					</div>)}
			</ReactCSSTransitionGroup>
		</div>
	}
}
Stack.childContextTypes = {
	stack: React.PropTypes.object,
}
