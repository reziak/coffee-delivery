import { createContext, ReactNode, useState } from 'react'

interface CoffeeOrder {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface CartContextType {
  items: CoffeeOrder[]
  totalItems: number
  totalItemsPrice: number
  addItemToCart: (item: CoffeeOrder) => void
  updateItemQuantity: (id: number, quantity: number) => void
  removeItemFromCart: (id: number) => void
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

  const updateItemQuantity = (id: number, quantity: number) => {
    setItems((prevState) => {
      return prevState.map((i) => {
        if (i.id === id) {
          return { ...i, quantity }
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

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        totalItemsPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
