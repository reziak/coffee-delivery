import { createContext, ReactNode, useState } from 'react'

export interface CoffeeOrder {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

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

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CoffeeOrder[]>([])

  const totalItems = items.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const totalItemsPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const deliveryFee = items.length > 0 ? 3.5 : 0

  const totalOrderPrice = totalItemsPrice + deliveryFee

  const addItemToCart = (item: CoffeeOrder) => {
    setItems((prevState) => {
      const existingItem = prevState.findIndex((i) => i.id === item.id)

      if (existingItem !== -1) {
        prevState[existingItem].quantity = item.quantity
        return [...prevState]
      }

      return [...prevState, item]
    })
  }

  const increaseItemQuantity = (id: number) => {
    setItems((prevState) => {
      return prevState.map((i) => {
        if (i.id === id) {
          return { ...i, quantity: i.quantity + 1 }
        }
        return i
      })
    })
  }

  const decreaseItemQuantity = (id: number) => {
    setItems((prevState) => {
      return prevState.map((i) => {
        if (i.id === id) {
          return { ...i, quantity: i.quantity - 1 }
        }
        return i
      })
    })
  }

  const removeItemFromCart = (id: number) => {
    setItems((prevState) => {
      return prevState.filter((i) => {
        return i.id !== id
      })
    })
  }

  const clearCart = () => {
    setItems([])
  }

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
