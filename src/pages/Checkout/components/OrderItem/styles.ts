import styled from 'styled-components'

export const OrderItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0 0 2rem;

  & + li {
    border-top: 1px solid ${(props) => props.theme.colors['gray-400']};
    padding-top: 2rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    flex: 1;

    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      > button[type='button'] {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        text-transform: uppercase;
        border: 0;
        padding: 0.5rem;
        background: ${(props) => props.theme.colors['gray-400']};
        transition: background 0.2s;
        min-height: 2.375rem;
        font-size: 0.75rem;
        line-height: 1.3;

        svg {
          color: ${(props) => props.theme.colors.purple};
        }

        &:hover {
          background: ${(props) => props.theme.colors['gray-500']};
        }
      }
    }
  }
`
