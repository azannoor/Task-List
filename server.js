import express from 'express'
import notFoundMiddleware from './middlewares/NotFound.js'

const app = express()





app.get("/",(req,res)=>{
    res.send('welcome')
})
//middleware
app.use(notFoundMiddleware)

app.listen(5000,()=>{
    console.log('server listen')
})