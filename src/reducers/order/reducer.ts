import { CoffeeOrder } from '../cart/reducer'
import { ActionTypes } from './actions'

export interface ClientData {
  zipCode: string
  address: string
  buildingNumber: string
  address2?: string | null
  neighborhood: string
  city: string
  state: string
  paymentOption: 'credit' | 'debit' | 'money' | null
}

export interface OrderState {
  client: ClientData
  items: CoffeeOrder[]
  totalOrderPrice: number
}

export const orderReducer = (state: OrderState, action: any) => {
  if (action.type === ActionTypes.ADD_NEW_ORDER) {
    return {
      ...state,
      client: action.payload.newOrder.client,
      items: action.payload.newOrder.items,
      totalOrderPrice: action.payload.newOrder.totalOrderPrice,
    }
  } else {
    return state
  }
}
