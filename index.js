
// Copyrights to Sagi Friedman 11/05/2017

const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = process.env.PORT || 3000;
var customerVOD = require("./language.js");
var customer =  customerVOD("Sagi",224);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', (req,res,next) =>{
    console.log("welcome customer");
    next();
});

app.get('/',
    (req,res) => {
        res.sendFile(`${__dirname}/index.html`);
    });

// give me all the json//
app.get('/tvShow',     
    (req,res) => {
        console.log("get: show all tv");
        res.status(200).json(customer.tvShow());
    });



// will give you back ID  
app.post('/S_tvshow/',
    (req,res) =>{
        console.log(`post: ${req.body.tvId}`);
        res.status(200).json(customer.Tvshowid(req.body.tvId));
    });

/* can choose year and language from the json
 file and its will give you back with filter*/
app.get('/getstatuslangageTvshow/:year/:language',
    (req,res) => {
        console.log(`get: ${req.params.year} ${req.params.language}`);
        res.status(200).json(customer.getstatuslangageTvshow(req.params.year,req.params.language));
    });

app.listen(port);
console.log(`listen on port ${port}`);