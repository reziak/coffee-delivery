import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { GlobalStyles } from './global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
