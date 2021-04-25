import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { injectGlobal } from '@emotion/css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&display=swap');
`

const DisplayScreen = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(#8ebf96, #2a8f3f);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow:
    inset 0 2px 3px rgba(255,255,255,0.13),
    0 5px 8px rgba(0,0,0,0.3),
    0 10px 10px 4px rgba(0,0,0,0.3);

    p {
      font-family: 'Chakra Petch', sans-serif;
      color: #434343;
      text-transform: uppercase;
      font-size: 20px;
      margin-left: 20px;
      margin-right: 20px;
      font-weight: 600;
      text-shadow: 0 0 2px #5e5e5e;
    }
`

const Display = ({ text }) => {
  return (
    <DisplayScreen>
      <p>{text}</p>
    </DisplayScreen>
  )
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Display
