import React from 'react'
import ReactDOM from 'react-dom'

import ApiProvider from './components/Api/ApiProvider'
import CartProvider from './components/ShopCart/CartProvider'
import ThemeSwitchProvider from './components/ThemeSwitch/ThemeSwitchProvider'
import App from './App'

const AppWrapper = () => (
  <ApiProvider>
    <CartProvider>
      <ThemeSwitchProvider>
        <App />
      </ThemeSwitchProvider>
    </CartProvider>
  </ApiProvider>
)

ReactDOM.render(<AppWrapper />, document.getElementById('root'))