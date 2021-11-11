import React,{useEffect,useState} from 'react';
import memories from "./img/images.jpg"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from './Components/Posts/Posts'
import Form from './Components/Form/Form'
import useStyles from './styles'
import {useDispatch } from 'react-redux'
import {getPosts}  from './actions/posts'



function App() {
const classes = useStyles()
const dispatch = useDispatch();
const [currentId, setCurrentId] = useState(null)  

useEffect(() => {
  dispatch(getPosts())

}, [currentId ,dispatch])



  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant='h2' align='center' >Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height='90' />
      </AppBar>
      <Grow in> 
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems='streach' spacing={3}  >
            <Grid xs={12} sm={7} >
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid className="spacing3" xs={12} sm={4} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
