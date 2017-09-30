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
$.ajax({
            type: "POST",
            url: "/addDirector",
            data: { fName: fName,
                    lName: lName,
                    email: email,
                    phone:phone,
                    address:address,
                    password:password
             },
            success: function(data) {
              this.location.reload(true);

            },
            error: function(jqXHR, textStatus, err) {
                alert('text status '+textStatus+', err '+err)
            }
        });
