const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello Node');
})

app.get('/list',(req,res)=>{
    res.send('this is list');
})

app.listen(port,()=>{
    console.log('express',port);
})
