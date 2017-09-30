$(document).ready(function(){
  $(".fosterPanel").click(function(e){
    var tile = $(e.target).closest(".tile");
    var fosterID = $(tile).children("p.idHolder").html();

    var reqUrl = "/foster/" + fosterID;

    var link = document.createElement('a');
    link.href = reqUrl;
    document.body.appendChild(link);
    link.click();
  });
});
