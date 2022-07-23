import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeType } from '../../../../data/coffee'
import { formatPriceWithoutCurrency } from '../../../../utils/formatPriceWithoutCurrency'

import { CardContainer } from './styles'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [counter, setCounter] = useState(1)
  const { addItemToCart } = useContext(CartContext)

  const handleAddItemToCart = () => {
    const newItem = {
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      quantity: counter,
      imageUrl: coffee.imageUrl,
    }

    addItemToCart(newItem)
  }

  return (
    <CardContainer>
      <img src={coffee.imageUrl} alt="" />
      <ul>
        {coffee.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <form>
        <p>
          R$ <span>{formatPriceWithoutCurrency(coffee.price)}</span>
        </p>
        <Counter counter={counter} setCounter={setCounter} />
        <button type="button" onClick={handleAddItemToCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </form>
    </CardContainer>
  )
}
