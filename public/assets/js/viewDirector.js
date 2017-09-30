$(document).ready(function(){
  $(".directorPanel").click(function(e){
    var tile = $(e.target).closest(".tile");
    var directorID = $(tile).children("p.idHolder").html();

    var reqUrl = "/director/" + directorID;

    var link = document.createElement('a');
    link.href = reqUrl;
    document.body.appendChild(link);
    link.click();
  });
});
