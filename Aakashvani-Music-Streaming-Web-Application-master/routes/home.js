var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: 'e8c013631bbe4e79994ebf0d722a3004',
    clientSecret: '4d65c616a07d469d8b67fc0a0af87a70'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body.access_token);
        console.log('The access token is ' + data.body.access_token);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body.access_token);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

router.get('/', function (req, res) {
    spotifyApi.getAlbums(['5zrZPXoYsu772sB3CwVuxr', '2dnfny8QAiGbUk9NI2P9c2',
            '2IxJq56k3lxbVXbTaXVNe2', '2qPF34ldSTpFg8SEywoQ8E',
            '1Ws6ds3qMFcQZfnMd0iF2z', '1gMxiQQSg5zeu4htBosASY',
            '28NpsSwjrzxoA4Tr7rH1aT', '5HMjpBO0v78ayq5lreAyDd', '4wGiiYsZ5QR9vj3fa0L7UV',
            '5gNhmPXwLLDFBUjZw9b18V','0X7m1CAW1ttl1YoslzNReV','1GBk7PAUmr0egrMYGAXbIB',
            '47S3yMixAINohfHXD5vHfc','0vHE0cmA8orbBgzIWz9T3D','3mOFY0HwnLOGsnpeH5WTdd',
            '6YAjZ24vIlErSQgpDPtmU2','1LwCzBciwXJwMuZKQj0bf6','7dwnZ2cEFRxBsUqjwBrxAs',
            '7B5QeVfOY5EN3EgNyz8DEw','5mWY0yGOJSTeTN8zQmbm9L'
        ],
        function (err, data) {
            if (err) throw err;
            var firstAlbumImage = data.body.albums[0].images[0].url;
            var secondAlbumImage = data.body.albums[1].images[0].url;
            var thirdAlbumImage = data.body.albums[2].images[0].url;
            var fourthAlbumImage = data.body.albums[3].images[0].url;
            var fifthAlbumImage = data.body.albums[4].images[0].url;
            var sixthAlbumImage = data.body.albums[5].images[0].url;
            var seventhAlbumImage = data.body.albums[6].images[0].url;
            var eigthAlbumImage = data.body.albums[7].images[0].url;
            var ninthAlbumImage = data.body.albums[8].images[0].url;
            var AlbumImage10 = data.body.albums[9].images[0].url;
            var AlbumImage11 = data.body.albums[10].images[0].url;
            var AlbumImage12 = data.body.albums[11].images[0].url;
            var AlbumImage13 = data.body.albums[12].images[0].url;
            var AlbumImage14 = data.body.albums[13].images[0].url;
            var AlbumImage15 = data.body.albums[14].images[0].url;
            var AlbumImage16 = data.body.albums[15].images[0].url;
            var AlbumImage17 = data.body.albums[16].images[0].url;
            var AlbumImage18 = data.body.albums[17].images[0].url;
            var AlbumImage19 = data.body.albums[18].images[0].url;
            var AlbumImage20 = data.body.albums[19].images[0].url;
            var firstAlbumName = data.body.albums[0].name;
            var secondAlbumName = data.body.albums[1].name;
            var thirdAlbumName = data.body.albums[2].name;
            var fourthAlbumName = data.body.albums[3].name;
            var fifthAlbumName = data.body.albums[4].name;
            var sixthAlbumName = data.body.albums[5].name;
            var seventhAlbumName = data.body.albums[6].name;
            var eigthAlbumName = data.body.albums[7].name;
            var ninthAlbumName = data.body.albums[8].name;
            var AlbumName10 = data.body.albums[9].name;
            var AlbumName11 = data.body.albums[10].name;
            var AlbumName12 = data.body.albums[11].name;
            var AlbumName13 = data.body.albums[12].name;
            var AlbumName14 = data.body.albums[13].name;
            var AlbumName15 = data.body.albums[14].name;
            var AlbumName16 = data.body.albums[15].name;
            var AlbumName17 = data.body.albums[16].name;
            var AlbumName18 = data.body.albums[17].name;
            var AlbumName19 = data.body.albums[18].name;
            var AlbumName20 = data.body.albums[19].name;


            // get tracks in first album
            spotifyApi.getAlbumTracks('5zrZPXoYsu772sB3CwVuxr', {
                limit: 1,
                offset: 0
            }, function (err, data) {
                if (err) throw err;
                var resultOne = data.body.items[0];
                // Get tracks in second album
                spotifyApi.getAlbumTracks('2dnfny8QAiGbUk9NI2P9c2', {
                        limit: 1,
                        offset: 0
                    }, function (err, data) {
                    if (err) throw err;
                    var resultTwo = data.body.items[0];
                    // Get tracks in third album
                    spotifyApi.getAlbumTracks('2IxJq56k3lxbVXbTaXVNe2', {
                            limit: 1,
                            offset: 0
                        }, function (err, data) {
                            if (err) throw err;
                            var resultThree = data.body.items[0];
                            // Get tracks in fourth album
                            spotifyApi.getAlbumTracks('2qPF34ldSTpFg8SEywoQ8E', {
                                limit: 1,
                                offset: 0
                                }, function (err, data) {
                                    if (err) throw err;
                                    var resultFour = data.body.items[0];
                                    // Get tracks in fifth album
                                     spotifyApi.getAlbumTracks('1Ws6ds3qMFcQZfnMd0iF2z', {
                                                 limit: 1,
                                                 offset: 0
                                             }, function (err, data) {
                                                 if (err) throw err;
                                                 var resultFive = data.body.items[0];
                                                 // Get tracks in sixth album
                                                 spotifyApi.getAlbumTracks('1gMxiQQSg5zeu4htBosASY', {
                                                     limit: 1,
                                                     offset: 0
                                                 }, function (err, data) {
                                                     if (err) throw err;
                                                     var resultSix = data.body.items[0];
                                                     // Get tracks in Seventh album
                                                     spotifyApi.getAlbumTracks('28NpsSwjrzxoA4Tr7rH1aT', {
                                                         limit: 1,
                                                         offset: 0
                                                     }, function (err, data) {
                                                         if (err) throw err;
                                                         var resultSeven = data.body.items[0];
                                                         // Get tracks in eigth album
                                                         spotifyApi.getAlbumTracks('5HMjpBO0v78ayq5lreAyDd', {
                                                             limit: 1,
                                                             offset: 0
                                                         }, function (err, data) {
                                                             if (err) throw err;
                                                             var resultEigth = data.body.items[0];
                                                             // Get tracks in ninth album
                                                             spotifyApi.getAlbumTracks('4wGiiYsZ5QR9vj3fa0L7UV', {
                                                                 limit: 1,
                                                                 offset: 0
                                                             }, function (err, data) {
                                                                 if (err) throw err;
                                                                 var resultNine = data.body.items[0];

                                                                 spotifyApi.getAlbumTracks('5gNhmPXwLLDFBUjZw9b18V', {
                                                                    limit: 1,
                                                                    offset: 0
                                                                }, function (err, data) {
                                                                    if (err) throw err;
                                                                    var result10 = data.body.items[0];

                                                                    spotifyApi.getAlbumTracks('0X7m1CAW1ttl1YoslzNReV', {
                                                                        limit: 1,
                                                                        offset: 0
                                                                    }, function (err, data) {
                                                                        if (err) throw err;
                                                                        var result11 = data.body.items[0];

                                                                        spotifyApi.getAlbumTracks('1GBk7PAUmr0egrMYGAXbIB', {
                                                                            limit: 1,
                                                                            offset: 0
                                                                        }, function (err, data) {
                                                                            if (err) throw err;
                                                                            var result12 = data.body.items[0];

                                                                            spotifyApi.getAlbumTracks('47S3yMixAINohfHXD5vHfc', {
                                                                                limit: 1,
                                                                                offset: 0
                                                                            }, function (err, data) {
                                                                                if (err) throw err;
                                                                                var result13 = data.body.items[0];

                                                                                spotifyApi.getAlbumTracks('0vHE0cmA8orbBgzIWz9T3D', {
                                                                                    limit: 1,
                                                                                    offset: 0
                                                                                }, function (err, data) {
                                                                                    if (err) throw err;
                                                                                    var result14 = data.body.items[0];

                                                                                    spotifyApi.getAlbumTracks('3mOFY0HwnLOGsnpeH5WTdd', {
                                                                                        limit: 1,
                                                                                        offset: 0
                                                                                    }, function (err, data) {
                                                                                        if (err) throw err;
                                                                                        var result15 = data.body.items[0];

                                                                                        spotifyApi.getAlbumTracks('6YAjZ24vIlErSQgpDPtmU2', {
                                                                                            limit: 1,
                                                                                            offset: 0
                                                                                        }, function (err, data) {
                                                                                            if (err) throw err;
                                                                                            var result16 = data.body.items[0];

                                                                                            spotifyApi.getAlbumTracks('1LwCzBciwXJwMuZKQj0bf6', {
                                                                                                limit: 1,
                                                                                                offset: 0
                                                                                            }, function (err, data) {
                                                                                                if (err) throw err;
                                                                                                var result17 = data.body.items[0];

                                                                                                spotifyApi.getAlbumTracks('7dwnZ2cEFRxBsUqjwBrxAs', {
                                                                                                    limit: 1,
                                                                                                    offset: 0
                                                                                                }, function (err, data) {
                                                                                                    if (err) throw err;
                                                                                                    var result18 = data.body.items[0];

                                                                                                    spotifyApi.getAlbumTracks('7B5QeVfOY5EN3EgNyz8DEw', {
                                                                                                        limit: 1,
                                                                                                        offset: 0
                                                                                                    }, function (err, data) {
                                                                                                        if (err) throw err;
                                                                                                        var result19 = data.body.items[0];

                                                                                                        spotifyApi.getAlbumTracks('5mWY0yGOJSTeTN8zQmbm9L', {
                                                                                                            limit: 1,
                                                                                                            offset: 0
                                                                                                        }, function (err, data) {
                                                                                                            if (err) throw err;
                                                                                                            var result20 = data.body.items[0];

                                                                                                            spotifyApi.getAlbumTracks('29RaVoa0Ud7KRaB1PkpNY7', {
                                                                                                                limit: 1,
                                                                                                                offset: 0
                                                                                                            }, function (err, data) {
                                                                                                                if (err) throw err;
                                                                                                                var result21 = data.body.items[0];

                                                                                                                spotifyApi.getAlbumTracks('1Da8Vav4NVoQfNX7HAR2zZ', {
                                                                                                                    limit: 1,
                                                                                                                    offset: 0
                                                                                                                }, function (err, data) {
                                                                                                                    if (err) throw err;
                                                                                                                    var result22 = data.body.items[0];

                                                                                                                    spotifyApi.getAlbumTracks('1NaCwIdxU0PToFklMhSf3I', {
                                                                                                                        limit: 1,
                                                                                                                        offset: 0
                                                                                                                    }, function (err, data) {
                                                                                                                        if (err) throw err;
                                                                                                                        var result23 = data.body.items[0];

                                                                                                                        spotifyApi.getAlbumTracks('5zrZPXoYsu772sB3CwVuxr', {
                                                                                                                            limit: 1,
                                                                                                                            offset: 1
                                                                                                                        }, function (err, data) {
                                                                                                                            if (err) throw err;
                                                                                                                            var result24 = data.body.items[0];

                                                                                                            



                                                                  res.render('index', {
                                                                      title: 'Aakashvani',
                                                                      style: 'index.css',
                                                                      script: 'addToPlay.js',
                                                                      firstAlbumImage: firstAlbumImage,
                                                                      secondAlbumImage: secondAlbumImage,
                                                                      thirdAlbumImage: thirdAlbumImage,
                                                                      fourthAlbumImage: fourthAlbumImage,
                                                                      fifthAlbumImage: fifthAlbumImage,
                                                                      sixthAlbumImage: sixthAlbumImage,
                                                                      seventhAlbumImage: seventhAlbumImage,
                                                                      eigthAlbumImage: eigthAlbumImage,
                                                                      ninthAlbumImage: ninthAlbumImage,
                                                                      AlbumImage10:AlbumImage10,
                                                                      AlbumImage11:AlbumImage11,
                                                                      AlbumImage12:AlbumImage12,
                                                                      AlbumImage13:AlbumImage13,
                                                                      AlbumImage14:AlbumImage14,
                                                                      AlbumImage15:AlbumImage15,
                                                                      AlbumImage16:AlbumImage16,
                                                                      AlbumImage17:AlbumImage17,
                                                                      AlbumImage18:AlbumImage18,
                                                                      AlbumImage19:AlbumImage19,
                                                                      AlbumImage20:AlbumImage20,
                                                                      firstAlbumName: firstAlbumName,
                                                                      secondAlbumName: secondAlbumName,
                                                                      thirdAlbumName: thirdAlbumName,
                                                                      fourthAlbumName: fourthAlbumName,
                                                                      fifthAlbumName: fifthAlbumName,
                                                                      sixthAlbumName: sixthAlbumName,
                                                                      seventhAlbumName: seventhAlbumName,
                                                                      eigthAlbumName: eigthAlbumName,
                                                                      ninthAlbumName: ninthAlbumName,
                                                                      AlbumName10:AlbumName10,
                                                                      AlbumName11:AlbumName11,
                                                                      AlbumName12:AlbumName12,
                                                                      AlbumName13:AlbumName13,
                                                                      AlbumName14:AlbumName14,
                                                                      AlbumName15:AlbumName15,
                                                                      AlbumName16:AlbumName16,
                                                                      AlbumName17:AlbumName17,
                                                                      AlbumName18:AlbumName18,
                                                                      AlbumName19:AlbumName19,
                                                                      AlbumName20:AlbumName20,
                                                                      audioOne: resultOne,
                                                                      audioTwo: resultTwo,
                                                                      audioThree: resultThree,
                                                                      audioFour: resultFour,
                                                                      audioFive: resultFive,
                                                                      audioSix: resultSix,
                                                                      audioSeven: resultSeven,
                                                                      audioEigth: resultEigth,
                                                                      audio10: result10,
                                                                      audio11: result11,
                                                                      audio12: result12,
                                                                      audio13: result13,
                                                                      audio14: result14,
                                                                      audio15: result15,
                                                                      audio16: result16,
                                                                      audio17: result17,
                                                                      audio18: result18,
                                                                      audio19: result19,
                                                                      audio20: result20,
                                                                      audio21: result21,
                                                                      audio22: result22,
                                                                      audio23: result23,
                                                                      audio24: result24,
                                                                      user: req.session.user,
                                                                      username: req.session.username
                                                                  });


                                                             });

                                                            });

                                                         });


                                                        });


                                                    });
                                                    });

                                                     });


                                                    });
                                                 });
                                                

                                                });
                                                
                                                });
                                    
                                            });

                                            });

                                        });

                                    });

                                });

                            });
                                            });
                                        });
                                    });
                                   
                            });
                        });
                    });
            });
    });
});





router.get('/search/:data', function (req, res) {
    console.log('search word' + req.params.data);
    spotifyApi.searchTracks(req.params.data)
        .then(function (data) {
            res.send(data.body.tracks.items);
        }, function (err) {
            console.error(err);
        });
});

module.exports = router;