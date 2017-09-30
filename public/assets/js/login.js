$(document).ready(function(){
  $('#directorLogin').hide();

  $("#directorToggle").click(function(){
    $('#directorToggle').removeClass('toggleButtonInactive');
    $('#directorToggle').addClass('toggleButtonActive');

    $('#fosterToggle').addClass('toggleButtonInactive');
    $('#fosterToggle').removeClass('toggleButtonActive');

    $("#fosterLogin").hide();
    $("#directorLogin").show();
  });

  $("#fosterToggle").click(function(){
    $('#fosterToggle').removeClass('toggleButtonInactive');
    $('#fosterToggle').addClass('toggleButtonActive');

    $('#directorToggle').addClass('toggleButtonInactive');
    $('#directorToggle').removeClass('toggleButtonActive');

    $("#directorLogin").hide();
    $("#fosterLogin").show();
  });
});
