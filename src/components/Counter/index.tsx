import { Minus, Plus } from 'phosphor-react'
import React from 'react'

import { CounterContainer } from './styles'

interface CounterProps {
  counter: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

export const Counter = ({ counter, setCounter }: CounterProps) => {
  const handleIncreaseCounter = () => {
    setCounter((prevState) => {
      return prevState + 1
    })
  }

  const handleDecreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevState) => {
        return prevState - 1
      })
    }
  }

  return (
    <CounterContainer>
      <button type="button" onClick={handleIncreaseCounter}>
        <Plus size={14} weight="bold" />
      </button>
      <input
        type="number"
        min={1}
        value={counter}
        onChange={() => console.log(counter)}
      />
      <button type="button" onClick={handleDecreaseCounter}>
        <Minus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
