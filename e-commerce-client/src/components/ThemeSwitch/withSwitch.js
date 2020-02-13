import React from 'react'
import ThemeSwitchContext from './ThemeSwitchContext'

export default function (WrappedComponent){
    return function ThemeHOC(props) {
        return (
          <ThemeSwitchContext.Consumer>
              {value => {
                  return(<WrappedComponent {...props} {...value}/>)
              }}
          </ThemeSwitchContext.Consumer>
        )
    }
}