const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.static('public'))


app.listen( 3001, () => console.log(`Server up: http://localhost:3001`) )


app.get( '/', ( req,res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
} )