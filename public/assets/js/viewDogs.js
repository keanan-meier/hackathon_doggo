$(document).ready(function(){
  $(".dogPanel").click(function(e){
    var tile = $(e.target).closest(".tile");
    var dogID = $(tile).children("p.idHolder").html();
    alert(dogID);
  });
});
