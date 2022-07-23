import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.5rem 0 5.75rem;
  gap: 2rem;

  h2 {
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme.colors['gray-900']};
  }
`

export const ClientFields = styled.div`
  max-width: 40rem;
`

export const BlockWrapperBase = styled.div`
  background: ${(props) => props.theme.colors['gray-200']};
  padding: 2.5rem;
  margin-top: 1rem;
`

export const OrderBlockWrapper = styled(BlockWrapperBase)`
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

  .client-address {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    input[type='text'] {
      border: 1px solid ${(props) => props.theme.colors['gray-400']};
      background: ${(props) => props.theme.colors['gray-300']};
      color: ${(props) => props.theme.colors['gray-600']};
      padding: 0.75rem;
      border-radius: 6px;
      outline: 0;
      min-width: 12.5rem;

      &#rua {
        flex: 0 0 100%; /* flex-grow, flex-shrink, flex-basis */
      }

      &#complemento {
        width: 100%;
      }

      &#cidade {
        flex: 1;
      }

      &#estado {
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
  }

  .payment-options {
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
  }
`

export const SelectedItems = styled.div`
  flex: 1;
`

export const OrderSummaryBlockWrapper = styled(BlockWrapperBase)`
  border-radius: 6px 36px 6px 36px;

  > strong {
    display: block;
    padding: 0 1rem 2rem;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  > ul {
    list-style: none;
  }

  .order-price {
    padding: 1.5rem 0;
    border-top: 1px solid ${(props) => props.theme.colors['gray-400']};

    p {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & + p {
        margin-top: 0.75rem;
      }

      &:not(:last-child) span:first-child {
        font-size: 0.875rem;
        line-height: 1.3;
      }

      &:last-child {
        font-size: 1.25rem;
        line-height: 1.3;
        font-weight: 700;
      }
    }
  }

  button[type='submit'] {
    border-radius: 6px;
    background: ${(props) => props.theme.colors.yellow};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    border: 0;
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    transition: background 0.2s;

    &:disabled {
      cursor: not-allowed;
      background: ${(props) => props.theme.colors['yellow-light']};
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`
