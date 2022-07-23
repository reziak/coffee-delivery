import { useContext, useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'

import { OrderItemContainer } from './styles'
import { formatPriceWithoutCurrency } from '../../../../utils/formatPriceWithoutCurrency'

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
  const [counter, setCounter] = useState(item.quantity)
  const { updateItemQuantity, removeItemFromCart } = useContext(CartContext)

  useEffect(() => {
    updateItemQuantity(item.id, counter)
  }, [item.id, counter, updateItemQuantity])

  const totalItemPrice = item.price * item.quantity

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(item.id)
  }

  return (
    <OrderItemContainer>
      <img src={item.imageUrl} alt="" />
      <div>
        <p>
          {item.name}{' '}
          <strong>{`R$ ${formatPriceWithoutCurrency(totalItemPrice)}`}</strong>
        </p>
        <div>
          <Counter counter={counter} setCounter={setCounter} />
          <button type="button" onClick={handleRemoveItemFromCart}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>
    </OrderItemContainer>
  )
}
