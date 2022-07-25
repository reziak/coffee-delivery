import { useContext, useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'

import { OrderItemContainer } from './styles'
import { formatPriceWithCurrency } from '../../../../utils/formatPriceWithCurrency'

interface OrderItemType {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface OrderItemProps {
  item: OrderItemType
}

export const OrderItem = ({ item }: OrderItemProps) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    useContext(CartContext)

  const totalItemPrice = item.price * item.quantity

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(item.id)
  }

  const handleIncreaseItemQuantity = () => {
    increaseItemQuantity(item.id)
  }

  const handleDecreaseItemQuantity = () => {
    decreaseItemQuantity(item.id)
  }

  return (
    <OrderItemContainer>
      <img src={item.imageUrl} alt="" />
      <div>
        <p>
          {item.name} <strong>{formatPriceWithCurrency(totalItemPrice)}</strong>
        </p>
        <div>
          <Counter
            value={item.quantity}
            incrementor={handleIncreaseItemQuantity}
            decrementor={handleDecreaseItemQuantity}
          />
          <button type="button" onClick={handleRemoveItemFromCart}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>
    </OrderItemContainer>
  )
}
