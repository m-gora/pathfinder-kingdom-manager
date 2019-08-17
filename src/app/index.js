import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Open Drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Kingdom Manager</Typography>
        </Toolbar>
      </AppBar>
      <Tooltip title="add" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </React.Fragment>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
