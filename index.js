const express = require('express');
const hbs = require('hbs');

const app  = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index',{
        autor: 'Luis Antonio García Colunga',
        year: new Date().getFullYear(),
        title: 'Inicio'
    });
});

app.get('/vangogh',(req,res)=>{
    res.render('vincent',{
        autor: 'Luis Antonio García Colunga',
        year: new Date().getFullYear(),
        title: 'Vincent van Gogh'
    });
});

app.get('/miguel',(req,res)=>{
    res.render('miguel',{
        autor: 'Luis Antonio García Colunga',
        year: new Date().getFullYear(),
        title: 'Miguel Angel'
    });
});

app.get('/leo',(req,res)=>{
    res.render('leo_da',{
        autor: 'Luis Antonio García Colunga',
        year: new Date().getFullYear(),
        title: 'Leonardo Da Vinci'
    });
});

app.get('/edv',(req,res)=>{
    res.render('edvard',{
        autor: 'Luis Antonio García Colunga',
        year: new Date().getFullYear(),
        title: 'Edvard Munch'
    });
});

app.get('/pic',(req,res)=>{
    res.render('picasso',{
        autor: 'Luis Antonio García Colunga',
        year: new Date().getFullYear(),
        title: 'Pablo Picasso'
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando puerto 3000');
});
