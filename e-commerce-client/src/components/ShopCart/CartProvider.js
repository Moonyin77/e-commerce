import React, { Component } from 'react'
import ShoppingCartContext from './CartContext'

/**
 * Store shopping cart items & state
 * Provide functions to interect with shopping cart
 */
class CartProvider extends Component {
  constructor(props) {
    super(props)
    console.log('CartProvider INIT')

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.incrementItem = this.incrementItem.bind(this)
    this.decrementItem = this.decrementItem.bind(this)
    this.storeLocal = this.storeLocal.bind(this)
    this.loadLocal = this.loadLocal.bind(this)
  }

  // Store cart from localStorage
  storeLocal() {
    window.localStorage.setItem('cart', JSON.stringify(this.state.items))
  } 
  
  // Load cart from localStorage
  loadLocal() {
    return JSON.parse(window.localStorage.getItem('cart'))
  }

  // Add an item to cart
  addItem({
    id,
    name,
    prix,
    quantity,
  }) {
    // Check if article is already in cart, if it is, increment it, otherwise add it to cart
    const { items } = this.state
    
    let isPresent = false
    items.forEach(item => {
      if (item.id === id) {
        this.incrementItem(id)
        isPresent = true
      }
    })

    if (isPresent) return

    const item = {
      id,
      name,
      price: prix,
      quantity: quantity ? quantity : 1
    }

    items.push(item)
    this.setState({items})
    this.storeLocal()
  }

  // Delete an item from cart
  deleteItem(id) {
    const { items } = this.state

    items.forEach((item, index) => {
      if (item.id === id) {
        items.splice(index, 1)
      }
    })

    this.setState({items})
    this.storeLocal()
  }

  // Increment the quantity of an item in cart
  incrementItem(id) {
    const { items } = this.state

    items.forEach(item => {
      if (item.id === id) {
        item.quantity++
      }
    })

    this.setState({items})
    this.storeLocal()
  }

  // Decrement the quantity of an item in cart
  // If quantity is zero, delete item
  decrementItem(id) {
    const { items } = this.state
    let isZero = false

    items.forEach(item => {
      if (item.id === id) {
        item.quantity--
        if (item.quantity < 1) {
          isZero = true
        }
      }
    })

    if (isZero) {
      this.deleteItem(id)
    } else {
      this.setState({items})
      this.storeLocal()
    }
  }

  // Load store on component's first mount
  componentDidMount() {
    const items = this.loadLocal()
    
    if (items) {
      this.setState({items})
    }
  }


  render() {
    return (
      <ShoppingCartContext.Provider
          value={{...this}}
      >
          {this.props.children}
      </ShoppingCartContext.Provider>
    )
  }
}

export default CartProvider