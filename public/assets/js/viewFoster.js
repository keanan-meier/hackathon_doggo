$(document).ready(function(){
  $(".fosterPanel").click(function(e){
    var tile = $(e.target).closest(".tile");
    var fosterID = $(tile).children("p.idHolder").html();
    alert(fosterID);
  });
});
