const express =require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send('welocme data');
});
app.listen(4000, err =>{
    console.log(err)
});