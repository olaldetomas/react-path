import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NavigationStyles from './styles'
import {  NavLink } from 'react-router-dom'


export default function Navigation(props) {
  const classes = NavigationStyles()

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
          {props.links.map((link, index) => (
            <ListItem button className={classes.listItem} key={link.id} component={NavLink} to={link.route}>
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
