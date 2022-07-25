import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatPriceWithCurrency } from '../../../../utils/formatPriceWithCurrency'
import { OrderItem } from '../OrderItem'
import { OrderSummaryBlockWrapper, SelectedItemsContainer } from './styles'

export const SelectedItems = () => {
  const { items, deliveryFee, totalItemsPrice, totalOrderPrice } =
    useContext(CartContext)

  const isCartEmpty = items.length <= 0

  return (
    <SelectedItemsContainer>
      <h2>Cafés selecionados</h2>
      <OrderSummaryBlockWrapper>
        {!isCartEmpty ? (
          <ul>
            {items.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <strong>Seu carrinho está vazio</strong>
        )}
        <div className="order-price">
          <p>
            <span>Total de itens</span>{' '}
            <span>{formatPriceWithCurrency(totalItemsPrice)}</span>
          </p>
          <p>
            <span>Entrega</span>{' '}
            <span>{formatPriceWithCurrency(deliveryFee)}</span>
          </p>
          <p>
            <span>Total</span>{' '}
            <span>{formatPriceWithCurrency(totalOrderPrice)}</span>
          </p>
        </div>
        <button type="submit" disabled={isCartEmpty}>
          Confirmar pedido
        </button>
      </OrderSummaryBlockWrapper>
    </SelectedItemsContainer>
  )
}
