var router = require('express').Router();
var ObjectID = require("mongodb").ObjectID;
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 




// Render Playlist with all songs
router.get("/", function (req, res) {
    if (req.session.loggedIn) {
        var id = req.session.user; // this should come from req.session when user logs in
        db.collection("register").findOne({ _id: ObjectID(id) }, function (err, result) {
            if (err) {
                return res.status(400).json({ error: 'An error occurred' });
            }
            res.render("playlist", {
                data: result.playlist,
                recent:result.recent,
                title: 'Playlist',
                style: 'index.css',
                script: "delete.js",
                user: req.session.user,
                username: req.session.username
            });
        });
    }
    else {
        res.redirect("/login");
    }

});



// Add song to playlist
router.post('/add', function (req, res) {
    var audioSrc = req.body.audioSrc;
    var songName = req.body.songName;
    var image = req.body.image;
    var _id = new ObjectID();

    var playlistObj = { _id, audioSrc, songName, image };

    var id = req.session.user; // this should be come from req.session when user login
    db.collection("register").updateOne({ _id: ObjectID(id) }, { $push: { playlist: playlistObj } }, function (err, result) {
        if (err) {
            return res.status(400).json({ error: "An error occurred" });
        }
        res.json({
            success: "Successfully added"
        });
    });
});

//Delete song from playlist
router.delete("/:songId", function (req, res) {
    var { songId } = req.params;
    var id = req.session.user; // this should be come from req.session when user login
    db.collection("register").updateOne({ _id: ObjectID(id) }, { $pull: { "playlist": { _id: ObjectID(songId) } } }, function (err, result) {
        //db.collection("users").deleteOne({_id:require("mongodb").ObjectID(req.params.id)},function(err,result){
        if (err) throw err;
        res.json({
            success: 'Successfully deleted'
        });
    });
});

// Add song to Recent played
router.post('/recent/add', function (req, res) {
    var audioSrc = req.body.audioSrc;
    var songName = req.body.songName;
    var image = req.body.image;
    var _id = new ObjectID();
    var recent = { _id, audioSrc, songName, image };
    var id = req.session.user; // this should be come from req.session when user login

    db.collection("register").updateOne({ _id: ObjectID(id) }, { $addToSet: { recent: recent} }, function (err, result) {
        if (err) {
            return res.status(400).json({ error: "An error occurred" });
        }
        res.json({
            success: "Successfully added"
        });
    });    
});

//Delete song from recent played
router.delete("/recent/:songId", function (req, res) {
    var { songId } = req.params;
    var id = req.session.user; // this should be come from req.session when user login
    db.collection("register").updateOne({ _id: ObjectID(id) }, { $pull: { "recent": { _id: ObjectID(songId) } } }, function (err, result) {
        //db.collection("users").deleteOne({_id:require("mongodb").ObjectID(req.params.id)},function(err,result){
        if (err) throw err;
        res.json({
         success: 'Successfully deleted'
             });
            });  
         });

         // Render Playlist with all songs
router.get("/next", function (req, res) {
    if (req.session.loggedIn) {
        var id = req.session.user; // this should come from req.session when user logs in
        db.collection("register").findOne({ _id: ObjectID(id) }, function (err, result) {
            if (err) {
                return res.status(400).json({ error: 'An error occurred' });
            }
            res.send(result.playlist);
        });
    }
    else {
        res.redirect("/login");
    }
});



module.exports = router;