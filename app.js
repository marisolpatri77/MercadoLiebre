const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.static('public'))

const PORT = process.env.PORT || 3001

app.listen( PORT, () => console.log(`Server up on PORT: http://localhost:${PORT}`) )


app.get( '/', ( req,res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
} )