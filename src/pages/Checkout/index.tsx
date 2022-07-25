import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderContext } from '../../contexts/OrderContext'
import { CartContext } from '../../contexts/CartContext'

import { ClientForm } from './components/ClientForm'
import { SelectedItems } from './components/SelectedItems'

import { CheckoutContainer } from './styles'

const newOrderValidationSchema = zod.object({
  zipCode: zod.string().min(8, 'Informe o cep'),
  address: zod.string({ required_error: 'Rua é campo obrigatório' }),
  buildingNumber: zod.string({ required_error: 'Número é campo obrigatório' }),
  address2: zod.string().nullable(),
  neighborhood: zod.string({ required_error: 'Bairro é campo obrigatório' }),
  city: zod.string({ required_error: 'Cidade é campo obrigatório' }),
  state: zod.string({ required_error: 'Estado é campo obrigatório' }),
  paymentOption: zod
    .literal('credit')
    .nullable()
    .or(zod.literal('debit').nullable())
    .or(zod.literal('money').nullable()),
})

type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export const Checkout = () => {
  const { items, totalOrderPrice, clearCart } = useContext(CartContext)
  const { createNewOrder } = useContext(OrderContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      buildingNumber: '',
      address2: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentOption: null,
    },
  })

  const navigate = useNavigate()

  const { handleSubmit } = newOrderForm

  const handleOrderSubmit = (data: NewOrderFormData) => {
    const newOrder = {
      client: data,
      items,
      totalOrderPrice,
    }

    createNewOrder(newOrder)
    clearCart()

    navigate('/checkout/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleOrderSubmit)}>
      <FormProvider {...newOrderForm}>
        <ClientForm />
      </FormProvider>
      <SelectedItems />
    </CheckoutContainer>
  )
}
