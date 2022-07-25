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
