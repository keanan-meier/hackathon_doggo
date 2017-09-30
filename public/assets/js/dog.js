$(document).ready(function(){
  $("#postUpdate").click(function(e){
    $('#postUpdateModal').modal();
  });


  $("#postEdit").click(function(e){
    $('#postEditModal').modal();
  });

  var curDogId = window.location.pathname.indexOf("dog/");

});
