import React from 'react'
import { render, screen } from '@testing-library/react'
import CalcButton from './calc-button'

describe('Test For Button Interact', () => {
  test('Render correctly.', () => {
    const spy = jest.fn()
    render(<CalcButton text="1" onClick={spy} />)
  })
  test('Render correctly active button.', () => {
    const spy = jest.fn()
    render(<CalcButton text="1" onClick={spy} active={true} />)
    const buttonText = screen.getByText('1')
    expect(buttonText).toHaveStyle('color: #25a4b8')
    expect(buttonText).toHaveStyle('text-shadow: 0 0 7px #00ffc4')
  })
  /* El test para el estilo al hacer click en el botón no se puede
  realizar debido a que el estilo se aplica en el selector active
  y no se puede acceder a estos estilos por medio de acciones de testing library */
})
