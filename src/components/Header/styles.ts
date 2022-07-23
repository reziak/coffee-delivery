import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > a {
    img {
      vertical-align: bottom;
    }
  }
`

const BaseNavItem = styled.div`
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.875rem;
`

export const Location = styled(BaseNavItem)`
  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
`

export const Cart = styled(BaseNavItem)`
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  position: relative;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors['yellow-light']};
  }

  span {
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors['yellow-light']};
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`
