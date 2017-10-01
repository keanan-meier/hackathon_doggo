$(document).ready(function(){


  $(".dogPanel").click(function(e){
    var tile = $(e.target).closest(".tile");
    var dogID = $(tile).children("p.idHolder").html();

    var reqUrl = "/dog/" + dogID;

    var link = document.createElement('a');
    link.href = reqUrl;
    document.body.appendChild(link);
    link.click();
  });
});
