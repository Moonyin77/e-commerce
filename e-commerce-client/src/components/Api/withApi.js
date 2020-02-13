import React from 'react'
import ApiContext from './ApiContext'

export default function (WrappedComponent){
    return function ApiHOC(props) {
        return (
          <ApiContext.Consumer>
              {value => {
                  return(<WrappedComponent {...props} api={value}/>)
              }}
          </ApiContext.Consumer>
        )
    }
}