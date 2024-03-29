import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import {CircularProgress, Grid} from '@material-ui/core'

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=> state.posts)
    const classes = useStyles()
    console.log(posts)
    return (
        !posts.length ? <div style={{display: 'grid', placeItems: 'center', height: '100%', width:"100%"}} > <CircularProgress style={{scale: '3'}} /> </div>: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map((post)=>(
                    <Grid key={post._id} xs={12} sm={6} item >
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
