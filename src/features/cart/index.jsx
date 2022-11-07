import React from 'react'
import CartInfo from './components/CartInfo'
import ProductList from './components/ProductList'

function Cart() {
  return (
    <div>
      <ProductList/>
      <CartInfo />
    </div>
  )
}

export default Cart
