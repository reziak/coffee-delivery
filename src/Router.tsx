import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './pages/_layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
