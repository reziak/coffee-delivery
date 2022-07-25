import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'
import { GlobalStyles } from './global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <OrderContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </OrderContextProvider>
    </ThemeProvider>
  )
}

export default App
