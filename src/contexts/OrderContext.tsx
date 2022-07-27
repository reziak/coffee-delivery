import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeOrder } from '../reducers/cart/reducer'
import { addNewOrderAction } from '../reducers/order/actions'
import { ClientData, orderReducer } from '../reducers/order/reducer'

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
  const [order, dispatch] = useReducer(orderReducer, {
    client: {},
    items: [],
    totalOrderPrice: 0,
  })

  const createNewOrder = (data: Order) => {
    dispatch(addNewOrderAction(data))
  }

  return (
    <OrderContext.Provider value={{ order, createNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
