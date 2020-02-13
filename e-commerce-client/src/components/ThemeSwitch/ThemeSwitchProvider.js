import React, { Component } from 'react'
import ThemeSwitchContext from './ThemeSwitchContext'

// Import default theme
import lightTheme from '../../theme/lightTheme'
import darkTheme from '../../theme/darkTheme'

class ThemeSwitchProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      theme: darkTheme,
    }

    if (this.getTheme()) {
      const type = this.getTheme()
      if (type === 'dark') {
        this.state.theme = darkTheme
      } else if(type === 'light') {
        this.state.theme = lightTheme
      }
    }

    this.getTheme = this.getTheme.bind(this)
    this.switchTheme = this.switchTheme.bind(this)
    this.getCurrentTheme = this.getCurrentTheme.bind(this)
    this.storeCurrentTheme = this.storeCurrentTheme.bind(this)
  }

  storeCurrentTheme(type) {
    window.localStorage.setItem('theme', type)
  }

  getTheme() {
    return window.localStorage.getItem('theme')
  }

  setTheme(type) {
    if (type === 'dark') {
      this.setState({theme: darkTheme})
    } else if(type === 'light') {
      this.setState({theme: lightTheme})
    }
  }

  getCurrentTheme() {
    if (this.state.theme === lightTheme) return 'light'
    return 'dark'
  }
  
  switchTheme() {
    const { theme } = this.state

    if (theme === lightTheme) {
      this.setState({theme: darkTheme})
      this.storeCurrentTheme('dark')
    } else if (theme === darkTheme) {
      this.setState({theme: lightTheme})
      this.storeCurrentTheme('light')
    }
  }

  render() {
    return (
      <ThemeSwitchContext.Provider
        value={{theme: this.state.theme, ...this}}
      >
          {this.props.children}
      </ThemeSwitchContext.Provider>
    )
  }
}

export default ThemeSwitchProvider