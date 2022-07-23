import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'

import { Cart, Location, NavContainer } from './styles'

import logo from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const { totalItems } = useContext(CartContext)

  return (
    <NavContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Campinas, SP</p>
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <ShoppingCart size={22} weight="fill" />
            {totalItems > 0 ? <span>{totalItems}</span> : null}
          </Cart>
        </NavLink>
      </div>
    </NavContainer>
  )
}
