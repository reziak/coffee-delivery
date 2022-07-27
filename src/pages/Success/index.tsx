import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import {
  ClientInformationContainer,
  ClientInformationItem,
  ConfirmationContainer,
  SuccessContainer,
} from './styles'

import deliveryGuy from '../../assets/coffee-delivery-delivery-guy.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Navigate } from 'react-router-dom'

const payment = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  money: 'Dinheiro',
}

export const Success = () => {
  const { order } = useContext(OrderContext)

  if (!order.client.zipCode) {
    return <Navigate to="/" />
  } else {
    return (
      <SuccessContainer>
        <ConfirmationContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <ClientInformationContainer>
            <div className="wrapper">
              <ClientInformationItem>
                <span className="location">
                  <MapPin size={16} weight="fill" />
                </span>
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>{`${order.client.address}, ${order.client.buildingNumber}`}</strong>
                  </p>
                  <p>{`${order.client.neighborhood} - ${order.client.city}, ${order.client.state}`}</p>
                </div>
              </ClientInformationItem>
              <ClientInformationItem>
                <span className="timer">
                  <Timer size={16} weight="fill" />
                </span>
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20min - 30min</strong>
                  </p>
                </div>
              </ClientInformationItem>
              <ClientInformationItem>
                <span className="currency">
                  <CurrencyDollar size={16} />
                </span>
                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>
                      {order.client.paymentOption &&
                        payment[order.client.paymentOption]}
                    </strong>
                  </p>
                </div>
              </ClientInformationItem>
            </div>
          </ClientInformationContainer>
        </ConfirmationContainer>
        <div>
          <img
            src={deliveryGuy}
            alt="Homem dirigindo uma moto levando a sua entrega"
          />
        </div>
      </SuccessContainer>
    )
  }
}
