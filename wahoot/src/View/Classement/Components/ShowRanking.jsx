import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const ShowRanking = () => {

    const classes = useStyles();
    
      return (
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                1
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Toto" secondary="1000 points" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                Titi
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                Lyly
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      );
    }

export default ShowRanking;