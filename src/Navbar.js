import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const languages = {
  english: {
    search: 'search',
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = ThemeContext;

  render() {
    const { classes } = this.props;
    console.log(this.context);
    return (
      <LanguageContext.Consumer>
        {(context) => (
          <div className={classes.root}>
            <AppBar
              position="static"
              color={this.context.isDardMode ? 'default' : 'primary'}
            >
              <Toolbar>
                <IconButton className={classes.menu} color="inherit">
                  <span>FR</span>
                </IconButton>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="nherit"
                >
                  Navbar {context.language}
                </Typography>
                <Switch color="error" onChange={this.context.toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>{<SearchIcon />}</div>
                  <InputBase
                    placeholder="Search..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
export default withStyles(styles)(Navbar);
