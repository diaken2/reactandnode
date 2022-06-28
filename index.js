const express=require("express")
path=require('path')

const app=express()

app.use(express.json({extended:true}))

app.use('/api', require('./routes/upload.route'))
app.use('/images',express.static(path.join(__dirname,"images")))
app.use(express.static(path.join(__dirname, 'client/build')));

const POST=process.env.PORT || 3000
app.listen(POST,()=>{
    console.log("Server has been launched...")
})
