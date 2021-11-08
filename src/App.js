import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProp: true,
      isDark: true,
    };
  }
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}
