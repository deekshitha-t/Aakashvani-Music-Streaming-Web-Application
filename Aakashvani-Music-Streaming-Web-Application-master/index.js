var express = require("express");
var hbs = require('hbs');
var session = require("express-session");
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

var port = process.env.PORT || 3000;


var app = express();
app.use(
    session({
        secret: "Express session secret"
    })
);
app.use(bodyParser.json()); 
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

// load router
var homeRouter = require('./routes/home');
//var playlistRouter=require('./routes/playlist');

var playlistRouter = require('./routes/playlist');

// hbs middleware
app.set('view engine', 'hbs');

// express body-parser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// static folder middleware
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials/');


hbs.registerHelper('is', function (parameter, string, options) {
    if (parameter == string) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

// use router
app.use('/', homeRouter);

// playlist router
app.use("/playlist", playlistRouter)





app.get("/signup", function (req, res) {
    res.render("signup", {
        title: "add Users",
        script: "/signup.js",
        user: req.session.user
    });
});

app.post('/users/user', function(req,res){ 
    var username = req.body.username; 
    var email =req.body.email; 
    var pass = req.body.password; 
    var confirm =req.body.password2; 
  
    var data = { 
        "username": username, 
        "email":email, 
        "password":pass, 
        "confirm":confirm 
    } 
db.collection('register').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.redirect('/login'); 
}) 


app.post('/login', function (req, res) {
    var flag = false;
    db.collection('register')
        .find()
        .toArray(function (error, result) {
            if (error) {
                throw error;
            }
            for (var i = 0; i < result.length; i++) {
                if (req.body.username == result[i].username && req.body.password == result[i].password) {
                    flag = true;
                    req.user = result[i]._id;
                    req.username = req.body.username;
                    console.log(req.user);
                    break;
                }
            }
            if (flag) {
                req.session.loggedIn = true;
                req.session.user = req.user;
                req.session.username = req.username;
                console.log(req.user);
                res.redirect('/');
            } else {
                res.redirect('/signup');
            }
        });
});



app.get("/login", function (req, res) {
    res.render("login", {
        title: "login",
        style: "login.css",
        user: req.session.user

    });
});

app.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/login")

})




//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.status(404).send('<h1>what??? page not found! 404</h1>');

});


app.listen(port, function (req, res) {
    console.log("listening at 3000");
});

module.exports = app;