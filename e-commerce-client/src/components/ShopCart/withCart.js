import React from 'react'
import ShoppingCartContext from './CartContext'

export default function (WrappedComponent){
    return function CartHOC(props) {
        return (
          <ShoppingCartContext.Consumer>
              {value => {
                  return(<WrappedComponent {...props} cart={value}/>)
              }}
          </ShoppingCartContext.Consumer>
        )
    }
}