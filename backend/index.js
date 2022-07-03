const express = require('express');
const cors = require('cors');
const Port = 5000;



const app = express();

//Config JSON response
app.use(express.json());


//Solve CORS
app.use(cors({credentials:true,origin:'http://localhost:3001'}));

//Plubic folder for images
app.use(express.static('public'));

//Routes 
const UserRoutes = require('./routes/UserRoutes')
app.use('/users',UserRoutes);   

app.listen(Port,()=> console.log(`out-of-the-door service:${Port}`));