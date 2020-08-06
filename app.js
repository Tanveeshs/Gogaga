var express = require('express');
var path = require('path');
const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
const bodyParser = require('body-parser')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://gogaga:gogaga@cluster0-pavbm.mongodb.net/Gogaga?retryWrites=true&w=majority',
    {useNewUrlParser: true,useUnifiedTopology:true})

app.use('/', indexRouter);


app.listen(process.env.PORT || 3000,function (err){
  if(err){
    console.log(err)
  }
  console.log('Server started at port 3000')
})
