import { OrderState } from './reducer'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
}

export const addNewOrderAction = (newOrder: OrderState) => {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}
