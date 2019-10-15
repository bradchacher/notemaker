  const express = require('express');
  const exphbs  = require('express-handlebars');
  const mongoose = require('mongoose');

  const app = express();

  //Map global promise - get rid of warning
  //mongoose.Promise = global.Promise;
  //Connect to mongoose
  

  //Load Idea model
  // require('./models/Idea');
  // const Idea = mongoose.model('ideas');

  // //How middleware works
  // app.use((req,res,next) => {
  //   console.log(Date.now());
  //   req.name = 
  //   next();
  // });


  //Handlebars Middleware -- ie telling the system we are about to use the handlebars template engine
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');


  //Index route
  app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
      title: title
    });

  });

  //About route
  app.get('/about', (req,res) => {
    const title = 'CHACHA'
    res.render('index', {
      title: title
    });
  });

  const port = 5000;

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

  alert('welcome')