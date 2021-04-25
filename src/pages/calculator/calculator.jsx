import React, { useState, useEffect } from 'react'
import CalcButton from '../../components/calc-button/calc-button'
import Display from '../../components/display/display'
import styled from '@emotion/styled'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Case = styled.div`
  width: 500px;
`

const buttons = [
  {
    value: '+/-',
  },
  {
    value: 'C',
  },
  {
    value: 'DEL',
  },
  {
    value: '/',
  },
  {
    value: '7',
  },
  {
    value: '8',
  },
  {
    value: '9',
  },
  {
    value: '*',
  },
  {
    value: '4',
  },
  {
    value: '5',
  },
  {
    value: '6',
  },
  {
    value: '-',
  },
  {
    value: '1',
  },
  {
    value: '2',
  },
  {
    value: '3',
  },
  {
    value: '+',
  },
  {
    value: '0',
  },
  {
    value: '.',
  },
  {
    value: '=',
  },
]

const Calculator = () => {
  const [displayText, setDisplayText] = useState('0')

  return (
    <Case>
        <Display text={displayText} />
      <Grid>
        {
          buttons.map((button, index) => (
            <>
              <CalcButton text={button.value} />
              {(index +1 === 4*4) ? <div /> : null}
            </>
          ))
        }
      </Grid>
    </Case>
  )
}

export default Calculator
