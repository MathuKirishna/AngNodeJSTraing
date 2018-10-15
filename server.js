const express =require('express');
const app = express();
const path = require('path');
const primarysearch = require('./Server/primarysearch/primarysearch');
const advancedsearch = require('./Server/advancedsearch/advancedsearch');
const viewprofile = require('./Server/viewprofile/viewprofile');
const shortlist = require('./Server/shortlist/shortlist');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
app.use('/primarysearch',primarysearch);
app.use('/advancedsearch',advancedsearch);
app.use('/viewprofile',viewprofile);
app.use('/profilepicture',viewprofile);
app.use('/shortlist',shortlist);


// app.get('/', function (req, res) {
//     console.log('Server Runninig');
//   });
const port = process.env.port || 3000;
app.listen(port,(req,res)=>{
    console.log(`Running on Port ${port}`);
});


   
