import styled from 'styled-components'

export const ClientFields = styled.div`
  max-width: 40rem;
`

export const OrderBlockWrapper = styled.div`
  background: ${(props) => props.theme.colors['gray-200']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;

  > p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors['gray-800']};

    &.map svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }

    &.currency svg {
      color: ${(props) => props.theme.colors.purple};
    }

    & + p {
      font-size: 0.875rem;
      line-height: 1.3;
      padding-left: calc(22px + 0.5rem);
      margin: 0.5rem 0 2rem;
    }
  }
`

export const ClientAddress = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  input[type='text'] {
    border: 1px solid ${(props) => props.theme.colors['gray-400']};
    background: ${(props) => props.theme.colors['gray-300']};
    color: ${(props) => props.theme.colors['gray-900']};
    padding: 0.75rem;
    border-radius: 6px;
    outline: 0;
    min-width: 12.5rem;

    &#address {
      flex: 0 0 100%; /* flex-grow, flex-shrink, flex-basis */
    }

    &#address2 {
      width: 100%;
    }

    &#city {
      flex: 1;
    }

    &#state {
      min-width: auto;
      max-width: 3.75rem;
    }

    &:focus-visible {
      border-color: ${(props) => props.theme.colors['yellow-dark']};

      & + span {
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
  }

  div {
    position: relative;
    flex: 60%;

    span {
      position: absolute;
      font-style: italic;
      right: 0.75rem;
      top: 0.75rem;
      font-size: 0.75rem;
      line-height: 1.3;
      color: ${(props) => props.theme.colors['gray-600']};
    }
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  input[type='radio'] {
    appearance: none;
    display: none;

    &:checked + label {
      background: ${(props) => props.theme.colors['purple-light']};
      border-color: ${(props) => props.theme.colors.purple};
    }
  }

  label {
    background: ${(props) => props.theme.colors['gray-400']};
    border-radius: 6px;
    padding: 1rem;
    min-width: 11.125rem;
    border: 1px solid ${(props) => props.theme.colors['gray-400']};
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors['gray-500']};
    }

    p {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      line-height: 1.6;

      svg {
        color: ${(props) => props.theme.colors.purple};
      }
    }
  }
`
