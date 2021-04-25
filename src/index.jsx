import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './pages/calculator/calculator'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)
const App = () => (
  <>
    <Calculator />
  </>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
