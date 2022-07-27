import { CoffeeOrder } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM = 'INCREASE_ITEM',
  DECREASE_ITEM = 'DECREASE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

export const addNewItemAction = (data: CoffeeOrder) => {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      data,
    },
  }
}

export const removeItemAction = (id: number) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

export const increaseItemAction = (id: number) => {
  return {
    type: ActionTypes.INCREASE_ITEM,
    payload: {
      id,
    },
  }
}

export const decreaseItemAction = (id: number) => {
  return {
    type: ActionTypes.DECREASE_ITEM,
    payload: {
      id,
    },
  }
}

export const clearCartAction = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
