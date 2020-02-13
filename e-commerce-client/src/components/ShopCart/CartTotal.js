import React, { Component } from 'react'

// MUI
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from '@material-ui/core'

// Utils
import withCart from './withCart'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  calculateTotal() {
    let total = 0

    this.props.items.forEach(item => {
      for(let i=0; i<item.quantity; i++) {
        total += item.price
      }
    })

    return total
  }
  
  render() {
    return (
      <ListItem>
        <ListItemText
          switch={this.props.cart.switch}
          primary={`Total: ${this.calculateTotal()}€`}
        />
      </ListItem>
    )
  }
}

const styles = theme => {

}

export default withStyles(styles)(withCart(CartItem))