import React, { createContext, Component } from 'react';
import useToggle from './hooks/useToggle';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDardMode: true,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      isDardMode: !this.state.isDardMode,
    });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          tasteLikeChicked: true,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
