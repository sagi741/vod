// Copyrights to Sagi Friedman 11/05/2017
var data = require("./data/language.json");
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000;
var customerVOD = require("./language.js");
var customer = customerVOD(data);
var mongodb = require("./mongoose_connect.js");
var shows = require("./shows");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', (req, res, next) => {
    console.log("welcome customer");
    next();
});

app.get('/',
    (req, res) => {
        res.sendFile(`${__dirname}/index.html`);
    });

app.get('/css/main.css',
    (req, res) => {
        res.sendFile(`${__dirname}/css/main.css`);
    });

app.get('/css/vod.jpg',
    (req, res) => {
        res.sendFile(`${__dirname}/css/vod.jpg`);
    });

app.post('/getShowById', (req, res) => {
    var id = req.body.id ? req.body.id : 0;
    if (id <= 0) {
        console.log('wrong inputs');
        return;
    }
    shows.findById(req.body.id).then(result => {
        res.status(200).json(result)
    }).catch(e=>{
        res.status(500).json(e)
    });
});

// give me all the json//
app.get('/tvShow/',
    (req, res) => {
        console.log('before tvShow')
        shows.find().then(result => {
            res.status(200).json(res)
        }).catch(e=>{
            res.status(500).json(e)
        })

        // console.log("get: show all tv");
        // res.status(200).json(customer.tvShow());
    });


// will give you back ID
app.post('/S_tvshow/',
    (req, res) => {
        console.log(`post: ${req.body.tvId}`);
        shows.findById(req.body.tvId).then(result => {

            res.status(200).json(result)
        }).catch(e=>{
            res.status(500).json(e)
        })
        //res.status(200).json(customer.Tvshowid(req.body.tvId));
    });

/* can choose year and language from the json
 file and its will give you back with filter*/
app.get('/getstatuslangageTvshow/:year/:language',
    (req, res) => {
    shows.find({
        year: req.params.year,
        language: req.params.language
    }).then(results=>{
        res.status(200).json(results)
    }).catch(e=>{
        res.status(500).json(e)
    })
        console.log(`get: ${req.params.year} ${req.params.language}`);
    });

app.listen(port);
console.log(`listen on port ${port}`);