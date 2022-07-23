import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatPriceWithCurrency } from '../../utils/formatPriceWithCurrency'

import { OrderItem } from './components/OrderItem'

import {
  CheckoutContainer,
  ClientFields,
  OrderBlockWrapper,
  OrderSummaryBlockWrapper,
  SelectedItems,
} from './styles'

export const Checkout = () => {
  const { items, totalItemsPrice } = useContext(CartContext)

  const isCartEmpty = items.length <= 0

  const deliveryFee = !isCartEmpty ? 3.5 : 0
  const orderTotalPrice = totalItemsPrice + deliveryFee

  return (
    <CheckoutContainer>
      <ClientFields>
        <h2>Complete seu pedido</h2>
        <OrderBlockWrapper>
          <p className="map">
            <MapPinLine size={22} />
            Endereço de entrega
          </p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <div className="client-address">
            <input id="cep" type="text" placeholder="CEP" />
            <input id="rua" type="text" placeholder="Rua" />
            <input id="numero" type="text" placeholder="Número" />
            <div>
              <input id="complemento" type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
            <input id="bairro" type="text" placeholder="Bairro" />
            <input id="cidade" type="text" placeholder="Cidade" />
            <input id="estado" type="text" placeholder="UF" />
          </div>
        </OrderBlockWrapper>
        <OrderBlockWrapper>
          <p className="currency">
            <CurrencyDollar size={22} />
            Pagamento
          </p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div className="payment-options">
            <input
              type="radio"
              name="payment-option"
              id="credit"
              value="credit"
            />
            <label htmlFor="credit">
              <p>
                <CreditCard size={16} />
                Cartão de Crédito
              </p>
            </label>
            <input
              type="radio"
              name="payment-option"
              id="debit"
              value="debit"
            />
            <label htmlFor="debit">
              <p>
                <Bank size={16} />
                Cartão de Débito
              </p>
            </label>
            <input
              type="radio"
              name="payment-option"
              id="money"
              value="money"
            />
            <label htmlFor="money">
              <p>
                <Money size={16} />
                Dinheiro
              </p>
            </label>
          </div>
        </OrderBlockWrapper>
      </ClientFields>
      <SelectedItems>
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
              <span>{formatPriceWithCurrency(orderTotalPrice)}</span>
            </p>
          </div>
          <button type="submit" disabled={isCartEmpty}>
            Confirmar pedido
          </button>
        </OrderSummaryBlockWrapper>
      </SelectedItems>
    </CheckoutContainer>
  )
}
