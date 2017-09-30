$(document).ready(function(){
  $("#postUpdate").click(function(e){
    $('#postUpdateModal').modal();
  });


  $("#postEdit").click(function(e){
    $('#postEditModal').modal();
  });

<<<<<<< HEAD
=======
  var curDogId = window.location.pathname.indexOf("dog/");
>>>>>>> parent of cf916e5... working update

  $("#submitUpdate").click(function(e){
  var dogIdString = window.location.pathname;
  var dogIdPos = dogIdString.indexOf("dog/") + 4;
  dogID = dogIdString.substring(dogIdPos,dogIdString.length);

  var title = $('#title').val();
  var date = $('#updateDate').val();
  var desc = $('#desc').val();

  var data = {dogID: dogID,
              title: title,
              date: date,
              desc: desc
            };

  $.ajax({
     type: "POST",
     url: "/postUpdate",
     data: {'body': data},
     success: function(msg) {
        alert("Form Submitted");
        location.reload();
     }
  });

});

});
