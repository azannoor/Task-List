import express from 'express'
import notFoundMiddleware from './middlewares/NotFound'
import mongoose from 'mongoose'

const app = express()





app.get("/",(req,res)=>{
    res.send('welcome')
})

//middleware
app.use(notFoundMiddleware)



const start = async()=>{
    try{
        await mongoose.connect("mongodb+srv://azaanoor18:5meORaMKvsKeojwP@hello.ngmfanm.mongodb.net/?retryWrites=true&w=majority&appName=Hello")
        app.listen(5000,()=>{
            console.log('server listen')
        })
    } catch(error){
        console.log(error)
    }
}

start()
