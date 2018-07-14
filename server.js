const express=require('express');
const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

// app.use((req,res,next) => {
//   res.render('maintainence.hbs');
// });

app.get('/',(req,res) => {
  res.send({
    name:'Anuj',
    age:18
  });
});

app.use(express.static(__dirname +'/public'));

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear:new Date().getFullYear()
  });
});





app.listen(3002);
