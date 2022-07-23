import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${(props) => props.theme.colors['gray-400']};
  border-radius: 6px;
  padding: 0.5rem;
  min-height: 2.375rem;
  width: 100%;
  max-width: 4.625rem;

  button[type='button'] {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${(props) => props.theme.colors.purple};
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }

  input[type='number'] {
    border: 0;
    outline: 0;
    background: transparent;
    text-align: center;
    max-width: 30px;
    padding: 0 0.25rem;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme.colors['gray-800']};
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
