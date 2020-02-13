import React, { Component } from 'react'

import { Link } from 'react-router-dom'

// MUI
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

// Components
import CartItem from './CartItem'
import CartTotal from './CartTotal'

// Utils
import withCart from './withCart'

class CartList extends Component {
  render() {
    const { items } = this.props.cart.state
    
    return (
      <>
        <List 
          dense={true}
          className={this.props.classes.list}
        >
          {items.map(el => (
            <CartItem 
              key={el.id}
              item={el}
            />
          ))}
          <CartTotal 
            items={items}
          />
          {window.location.pathname !== '/paiement' ?
            <Link
              to="/paiement"
            >
              <Button variant="contained" color="primary" className={this.props.classes.pay}>
                Payer
              </Button>
            </Link> : null
          }
        </List>
      </>
    )
  }
}

const styles = theme => ({
  list: {
    minWidth: '28em'
  },
  pay: {
    margin: '1em'
  }
})

export default withStyles(styles)(withCart(CartList))