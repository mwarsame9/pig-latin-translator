$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    $("#result").text(userSentence);
  });



});
