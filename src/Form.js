import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { LanguageContext } from './contexts/LanguageContext';

const languages = {
  english: {
    signIn: 'Sign In',
    email: 'Email Address',
    password: 'Password',
    remember: 'Remember Me',
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Address Electronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contrasena',
    remember: 'Recuerdame',
  },
};

class Form extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = LanguageContext;

  render() {
    const { signIn, email, password, remember } =
      languages[this.context.language];
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar} sx={{ bgcolor: 'red' }}>
            <LockIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select
            value={this.context.language}
            onChange={({ target }) => this.context.changeLanguage(target.value)}
          >
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
            <MenuItem value="french">French</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="error"
              sx={{ marginTop: 3 }}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
