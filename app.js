require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT;
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Servir contenido estático
app.use(express.static('public'))

app.get('/',  (req, res)=> {
    res.render('home',{
        nombre: 'brandon',
        titulo: 'curso de node'
    });
})

app.get('/generic',  (req, res)=> {
    res.render('generic',{
        nombre: 'brandon',
        titulo: 'curso de node'
    });
})
app.get('/elements',  (req, res)=> {
    res.render('elements',{
        nombre: 'brandon',
        titulo: 'curso de node'
    });
})
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')    
})


app.listen(port)