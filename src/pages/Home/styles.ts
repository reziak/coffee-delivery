import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5.75rem 0;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors['gray-900']};

    & + p {
      font-size: 1.25rem;
      line-height: 1.3;
      margin-bottom: 4.125rem;
      color: ${(props) => props.theme.colors['gray-800']};
    }
  }

  div {
    flex: 1;
  }

  > div + div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

export const HeroItems = styled.ul`
  display: grid;
  gap: 1rem;
  grid-auto-flow: row dense;
  grid-template-columns: 231px 1fr;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.3;

    span {
      color: ${(props) => props.theme.colors['gray-100']};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.cart {
        background: ${(props) => props.theme.colors['yellow-dark']};
      }

      &.package {
        background: ${(props) => props.theme.colors['gray-700']};
      }

      &.timer {
        background: ${(props) => props.theme.colors.yellow};
      }

      &.coffee {
        background: ${(props) => props.theme.colors.purple};
      }
    }
  }
`

export const CoffeeListContainer = styled.main`
  padding-bottom: 5.75rem;

  > h1 {
    line-height: 1.3;
    margin-bottom: 2.125rem;
  }

  > ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
