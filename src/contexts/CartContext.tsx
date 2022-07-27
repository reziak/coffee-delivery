import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addNewItemAction,
  clearCartAction,
  decreaseItemAction,
  increaseItemAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { cartReducer, CoffeeOrder } from '../reducers/cart/reducer'

interface CartContextType {
  items: CoffeeOrder[]
  deliveryFee: number
  totalItems: number
  totalItemsPrice: number
  totalOrderPrice: number
  addItemToCart: (item: CoffeeOrder) => void
  removeItemFromCart: (id: number) => void
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const initialCartState = [] as CoffeeOrder[]

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, dispatch] = useReducer(cartReducer, initialCartState, () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
  })

  const totalItems = items.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const totalItemsPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const deliveryFee = items.length > 0 ? 3.5 : 0

  const totalOrderPrice = totalItemsPrice + deliveryFee

  const addItemToCart = (item: CoffeeOrder) => {
    dispatch(addNewItemAction(item))
  }

  const increaseItemQuantity = (id: number) => {
    dispatch(increaseItemAction(id))
  }

  const decreaseItemQuantity = (id: number) => {
    dispatch(decreaseItemAction(id))
  }

  const removeItemFromCart = (id: number) => {
    dispatch(removeItemAction(id))
  }

  const clearCart = () => {
    dispatch(clearCartAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(items)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryFee,
        totalItems,
        addItemToCart,
        totalItemsPrice,
        totalOrderPrice,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
