import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import {
  ClientInformationContainer,
  ClientInformationItem,
  ConfirmationContainer,
  SuccessContainer,
} from './styles'

import deliveryGuy from '../../assets/coffee-delivery-delivery-guy.svg'

export const Success = () => {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
