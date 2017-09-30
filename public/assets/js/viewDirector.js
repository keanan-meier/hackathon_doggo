$(document).ready(function(){
  $(".directorPanel").click(function(e){
    var tile = $(e.target).closest(".tile");
    var directorID = $(tile).children("p.idHolder").html();
    alert(directorID);
  });
});
