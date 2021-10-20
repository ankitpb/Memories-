import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './Compenents/Posts/Posts';
import Form from './Compenents/Form/Form';
import { getPosts } from './actions/Posts';
import useStyles from './Styles';

import memories from './images/memories.png';

const App = () => {
    const [currentId, setcurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() =>{
      dispatch(getPosts());
    }, [currentId, dispatch]);
    
    
    return (
        <Container maxWidth="lg">
            <AppBar className ={classes.appBar} position="static" color="inherit">
                <Typography className ={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setcurrentId={setcurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId}  setcurrentId={setcurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};



export default App;

