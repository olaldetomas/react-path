import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.background.default
  },
  // necessary for content to be below app bar
  toolbar: {
    minHeight: 90,
    width: '100%',
    backgroundColor: theme.palette.background.default
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  listItem: {
    borderRadius: 50,
    maxWidth: 200
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function Navigation(props) {
  const classes = useStyles()

  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List className={classes.list}>
          {['My paths', '1', '2', '3'].map((text, index) => (
            <ListItem className={classes.listItem} button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
