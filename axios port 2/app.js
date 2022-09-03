const express =require('express');
const axios = require('axios');

const app =express();

axios.get('http://localhost:4000/').then(res => {

    console.log(res.data);
});


app.listen(4001, err =>{
    console.log(err)
})