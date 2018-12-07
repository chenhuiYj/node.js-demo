const express=require('express');
const app=express();
//const port=3000;
const articles = [{ title: 'Example' },{ title: 'Example2' }];
app.get('/',(req,res)=>{
    res.send('Hello Node');
})

app.get('/list',(req,res)=>{
    res.send(articles);
})

app.get('/list/:id', (req, res) => {
    const id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
});

app.delete('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({ message: 'Deleted' });
});

app.listen(3000);

module.exports = app;

// app.listen(port,()=>{
//     console.log('express',port);
// })
