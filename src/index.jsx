import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
