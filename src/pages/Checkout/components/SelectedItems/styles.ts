import styled from 'styled-components'

export const SelectedItemsContainer = styled.div`
  flex: 1;
`

export const OrderSummaryBlockWrapper = styled.div`
  background: ${(props) => props.theme.colors['gray-200']};
  padding: 2.5rem;
  margin-top: 1rem;
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
