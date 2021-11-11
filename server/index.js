import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors'
import postRoutes from "./routes/posts.js"



const app = express();


app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors())
app.use('/posts', postRoutes);

app.get("/",(req,res)=>{
    res.status(200).send("Wellcome to the Api")
})

const PORT = process.env.PORT || 5000

mongoose.connect( 'mongodb+srv://i-am-new-user:CWngRav9Ofo9BFGq@cluster0.9dvc7.mongodb.net/memories?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then((data) => console.log(data))
.catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}`) )

mongoose.set('useFindAndModify', false);