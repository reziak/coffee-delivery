import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  ClientAddress,
  ClientFields,
  OrderBlockWrapper,
  PaymentOptions,
} from './styles'

export const ClientForm = () => {
  const { register } = useFormContext()

  return (
    <ClientFields>
      <h2>Complete seu pedido</h2>
      <OrderBlockWrapper>
        <p className="map">
          <MapPinLine size={22} />
          Endereço de entrega
        </p>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <ClientAddress>
          <input
            id="zipCode"
            type="text"
            placeholder="CEP"
            {...register('zipCode')}
          />
          <input
            id="address"
            type="text"
            placeholder="Rua"
            {...register('address')}
          />
          <input
            id="buildingNumber"
            type="text"
            placeholder="Número"
            {...register('buildingNumber')}
          />
          <div>
            <input
              id="address2"
              type="text"
              placeholder="Complemento"
              {...register('address2')}
            />
            <span>Opcional</span>
          </div>
          <input
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <input
            id="city"
            type="text"
            placeholder="Cidade"
            {...register('city')}
          />
          <input
            id="state"
            type="text"
            placeholder="UF"
            {...register('state')}
          />
        </ClientAddress>
      </OrderBlockWrapper>
      <OrderBlockWrapper>
        <p className="currency">
          <CurrencyDollar size={22} />
          Pagamento
        </p>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <PaymentOptions>
          <input
            {...register('paymentOption')}
            type="radio"
            name="paymentOption"
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
            {...register('paymentOption')}
            type="radio"
            name="paymentOption"
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
            {...register('paymentOption')}
            type="radio"
            name="paymentOption"
            id="money"
            value="money"
          />
          <label htmlFor="money">
            <p>
              <Money size={16} />
              Dinheiro
            </p>
          </label>
        </PaymentOptions>
      </OrderBlockWrapper>
    </ClientFields>
  )
}
