import { createContext, ReactNode, useState } from 'react'

import { CoffeeOrder } from './CartContext'

interface ClientData {
  zipCode: string
  address: string
  buildingNumber: string
  address2?: string | null
  neighborhood: string
  city: string
  state: string
  paymentOption: 'credit' | 'debit' | 'money' | null
}

interface Order {
  client: ClientData
  items: CoffeeOrder[]
  totalOrderPrice: number
}

interface OrderContextType {
  order: Order
  createNewOrder: (data: Order) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [order, setOrder] = useState<Order>({} as Order)

  const createNewOrder = (data: Order) => {
    setOrder(data)
  }

  return (
    <OrderContext.Provider value={{ order, createNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
