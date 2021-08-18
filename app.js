const express = require('express');
const dotenv     = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const route = require('./routes/router');


const app = express();
//Set vie engine
app.set('view engine', 'ejs');


app.use(express.static('public'));

//Same as bodyParser
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

dotenv.config({path: './env/.env'});

app.use(cookieParser());

//Route import
app.use('/use', route);

// app.get('/', (req, res)=>{
//     res.render('index');
// });





const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server is running: ${port}`)
});