 $("#firstSong").on('click', function (e) {
     e.preventDefault();
     var data = {
         audioSrc: $("#audioSrcOne").attr("data"),
         songName: $("#songNameOne").attr("value"),
         image: $("#songImageOne").attr("src"),
     };
     $.ajax({
         url: "/playlist/add",
         method: "POST",
         dataType: "json",
         contentType: "application/json",
         data: JSON.stringify(data),
         success: function (data) {
             console.log(data);
         }
     });
     window.location.replace("/playlist");
 });

  $("#secondSong").on('click', function (e) {
      e.preventDefault();
      var data = {
          audioSrc: $("#audioSrcTwo").attr("data"),
          songName: $("#songNameTwo").attr("value"),
          image: $("#songImageTwo").attr("src"),
      };
      $.ajax({
          url: "/playlist/add",
          method: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(data),
          success: function (data) {
              console.log(data);
          }
      });
      window.location.replace("/playlist");
  });

   $("#thirdSong").on('click', function (e) {
       e.preventDefault();
       var data = {
           audioSrc: $("#audioSrcThree").attr("data"),
           songName: $("#songNameThree").attr("value"),
           image: $("#songImageThree").attr("src"),
       };
       $.ajax({
           url: "/playlist/add",
           method: "POST",
           dataType: "json",
           contentType: "application/json",
           data: JSON.stringify(data),
           success: function (data) {
               console.log(data);
           }
       });
       window.location.replace("/playlist");
   });

$("#fourthSong").on('click', function (e) {
    e.preventDefault();
    var data = {
        audioSrc: $("#audioSrcFour").attr("data"),
        songName: $("#four").attr("value"),
        image: $("#songImageFour").attr("src"),
    };
    $.ajax({
        url: "/playlist/add",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
        }
    });
    window.location.replace("/playlist");
});

 $("#fifthSong").on('click', function (e) {
     e.preventDefault();
     var data = {
         audioSrc: $("#audioSrcFive").attr("data"),
         songName: $("#songNameFive").attr("value"),
         image: $("#songImageFive").attr("src"),
     };
     $.ajax({
         url: "/playlist/add",
         method: "POST",
         dataType: "json",
         contentType: "application/json",
         data: JSON.stringify(data),
         success: function (data) {
             console.log(data);
         }
     });
     window.location.replace("/playlist");
 });

  $("#sixthSong").on('click', function (e) {
      e.preventDefault();
      var data = {
          audioSrc: $("#audioSrcSix").attr("data"),
          songName: $("#six").attr("value"),
          image: $("#songImageSix").attr("src"),
      };
      $.ajax({
          url: "/playlist/add",
          method: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(data),
          success: function (data) {
              console.log(data);
          }
      });
      window.location.replace("/playlist");
  });

   $("#seventhSong").on('click', function (e) {
       e.preventDefault();
       var data = {
           audioSrc: $("#audioSrcSeven").attr("data"),
           songName: $("#songNameSeven").attr("value"),
           image: $("#songImageSeven").attr("src"),
       };
       $.ajax({
           url: "/playlist/add",
           method: "POST",
           dataType: "json",
           contentType: "application/json",
           data: JSON.stringify(data),
           success: function (data) {
               console.log(data);
           }
       });
       window.location.replace("/playlist");
   });

    $("#eigthSong").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrcEigth").attr("data"),
            songName: $("#songNameEigth").attr("value"),
            image: $("#songImageEigth").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

     $("#ninthSong").on('click', function (e) {
         e.preventDefault();
         var data = {
             audioSrc: $("#audioSrcNine").attr("data"),
             songName: $("#songNameNine").attr("value"),
             image: $("#songImageNine").attr("src"),
         };
         $.ajax({
             url: "/playlist/add",
             method: "POST",
             dataType: "json",
             contentType: "application/json",
             data: JSON.stringify(data),
             success: function (data) {
                 console.log(data);
             }
         });
         window.location.replace("/playlist");
     });

     $("#Song10").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc10").attr("data"),
            songName: $("#songName10").attr("value"),
            image: $("#songImage10").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song11").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc11").attr("data"),
            songName: $("#songName11").attr("value"),
            image: $("#songImage11").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song12").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc12").attr("data"),
            songName: $("#songName12").attr("value"),
            image: $("#songImage12").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song13").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc13").attr("data"),
            songName: $("#songName13").attr("value"),
            image: $("#songImage13").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song14").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc14").attr("data"),
            songName: $("#songName14").attr("value"),
            image: $("#songImage14").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song15").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc15").attr("data"),
            songName: $("#songName15").attr("value"),
            image: $("#songImage15").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song16").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc16").attr("data"),
            songName: $("#songName16").attr("value"),
            image: $("#songImage16").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song17").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc17").attr("data"),
            songName: $("#songName17").attr("value"),
            image: $("#songImage17").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    $("#Song18").on('click', function (e) {
        e.preventDefault();
        var data = {
            audioSrc: $("#audioSrc18").attr("data"),
            songName: $("#songName18").attr("value"),
            image: $("#songImage18").attr("src"),
        };
        $.ajax({
            url: "/playlist/add",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (data) {
                console.log(data);
            }
        });
        window.location.replace("/playlist");
    });

    