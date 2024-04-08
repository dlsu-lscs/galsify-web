const express = require('express');
const session = require('express-session');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(session({
    secret: '#LiveLaughLoveGhee',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60*60*1000 }
}));

app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/scanner', (req, res) => {
    res.render('scanner', {
        layout: 'indiv'
    });
})

const port = 3333;
app.listen(port, function(){
    console.log('Listening at port '+port);
});