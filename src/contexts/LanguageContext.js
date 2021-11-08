import React, { createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(language) {
    this.setState({
      language: language,
    });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
