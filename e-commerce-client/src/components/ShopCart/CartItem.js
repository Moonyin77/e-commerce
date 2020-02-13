import React, { Component } from 'react'

// MUI
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItem from '@material-ui/core/ListItem'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { withStyles } from '@material-ui/core'

// Utils
import withCart from './withCart'

class CartItem extends Component {
  render() {
    
    const {
      id, name, price, quantity
    } = this.props.item

    return (
      <ListItem>
        <ListItemText
          primary={`${name} ${price}€`}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="increment-cart-item"
            onClick={() => {
              this.props.cart.incrementItem(id)
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>

          <IconButton>
            <Typography>
              {quantity}
            </Typography>
          </IconButton>

          <IconButton edge="end" aria-label='decrement-cart-item'
            onClick={() => {
              this.props.cart.decrementItem(id)
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>

          <IconButton edge="end" aria-label="delete"
            onClick={() => {
              this.props.cart.deleteItem(id)
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

const styles = theme => {

}

export default withStyles(styles)(withCart(CartItem))