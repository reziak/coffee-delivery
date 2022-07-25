import { Minus, Plus } from 'phosphor-react'
import React from 'react'

import { CounterContainer } from './styles'

interface CounterProps {
  value: number
  incrementor: () => void
  decrementor: () => void
}

export const Counter = ({ value, incrementor, decrementor }: CounterProps) => {
  return (
    <CounterContainer>
      <button type="button" onClick={incrementor}>
        <Plus size={14} weight="bold" />
      </button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={() => console.log(value)}
      />
      <button type="button" onClick={decrementor}>
        <Minus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
