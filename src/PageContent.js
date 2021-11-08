import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PageContent extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      backgroundColor: this.context.isDardMode ? 'black' : 'white',
      width: '100vw',
      height: '100vh',
      transition: 'all 0.7s ease-in-out',
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
