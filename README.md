# React-Toolbox Screen-Stack

An Android-like activity-stack implementation.

![demo](https://raw.githubusercontent.com/jrop/react-toolbox-screen-stack/master/example/demo.gif)

# Installation

```sh
npm install --save-dev react-toolbox-screen-stack
```

# Usage

```js
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
```

# License (ISC)
Copyright (c) 2016, Company or Person's Name <jrapodaca@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
