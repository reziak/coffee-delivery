import { ActionTypes } from './actions'

export interface CoffeeOrder {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

export interface CartState {
  items: CoffeeOrder[]
}

export const cartReducer = (state: CoffeeOrder[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return [...state, action.payload.data]

    case ActionTypes.INCREASE_ITEM: {
      const changedState = state.map((i) => {
        if (i.id === action.payload.id) {
          return { ...i, quantity: i.quantity + 1 }
        }
        return i
      })
      return [...changedState]
    }

    case ActionTypes.DECREASE_ITEM: {
      const changedState = state.map((i) => {
        if (i.id === action.payload.id) {
          return { ...i, quantity: i.quantity - 1 }
        }
        return i
      })
      return [...changedState]
    }

    case ActionTypes.REMOVE_ITEM: {
      const updatedState = state.filter((i) => {
        return i.id !== action.payload.id
      })
      return [...updatedState]
    }

    case ActionTypes.CLEAR_CART:
      return []

    default:
      return state
  }
}
