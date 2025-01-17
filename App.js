const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');

require('dotenv').config();
const PORT = process.env.PORT || 3001


app.use(express.static('public'));

// Embedded Templating ENgine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set ('view engine', 'ejs')



app.use('/', require('./server/routes/main'))


app.listen(PORT,()=>{
    console.log(`App Listening on port ${PORT}`)
})

