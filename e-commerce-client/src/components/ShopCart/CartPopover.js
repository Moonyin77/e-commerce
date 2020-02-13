import React from 'react'

// MUI
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

// Components
import CartList from './CartList'

export default function PopoverPopupState(props) {

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            <ShoppingBasketIcon />
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <CartList />
          </Popover>
        </div>
      )}
    </PopupState>
  )
}