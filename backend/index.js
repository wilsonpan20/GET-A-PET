const express = require('express');
const cors = require('cors')

const app = express()

//Config JSON response
app.use(express.json())


//solve CORS
app.use(cors({credentials:true,origin:'http://localhost:3000'}))

//plubic folder for images
app.use(express.static('public'))

app.listen(5000)