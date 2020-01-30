var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var HighScoreList = [];


app.post('/SubmitHighScore', function(req, res){
    console.log(req.body.username + ' , ' + req.body.score);
    HighScoreList.push({
        Name:req.body.username,
        Score:req.body.score
    });
    //var name = req.body.Name;
    //var score = parseInt(req.body.Score);
    //res.json({name:name,score:score});
    //res.json(HighScoreList);
    res.redirect('/scores.html');
});

//app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get('/index.html', function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get('/entry.html', function(req,res){
    res.sendFile(__dirname+"/entry.html");
})
app.get('/scores.html', function(req,res){
    res.sendFile(__dirname+"/scores.html");
})
app.get('/scores', function(req,res){
    console.log(HighScoreList);
    HighScoreList.sort(function(a,b){
        return b.Score - a.Score;
    });
    res.json(HighScoreList.slice(0,10));

})
app.listen(3000, function(){
    console.log("LEGGO SERVER 30000");
})

