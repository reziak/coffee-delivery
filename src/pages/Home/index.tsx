import { useEffect, useState } from 'react'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeType, coffeeData } from '../../data/coffee'

import { CoffeeCard } from './components/CoffeeCard'

import { CoffeeListContainer, HeroContainer, HeroItems } from './styles'

import coffeeAndBeans from '../../assets/coffee-delivery-cup-and-beans.png'

export const Home = () => {
  const [coffeeList, setCoffeeList] = useState<CoffeeType[] | undefined>(
    undefined,
  )

  useEffect(() => {
    setCoffeeList(coffeeData)
  }, [])

  return (
    <>
      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o coffee delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <HeroItems>
            <li>
              <span className="cart">
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span className="package">
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span className="timer">
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span className="coffee">
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </HeroItems>
        </div>
        <div>
          <img
            src={coffeeAndBeans}
            alt="Um copo de café com grãos de café em volta"
          />
        </div>
      </HeroContainer>
      <CoffeeListContainer>
        <h1>Nosso cafés</h1>
        <ul>
          {coffeeList &&
            coffeeList.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </ul>
      </CoffeeListContainer>
    </>
  )
}
