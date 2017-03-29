//Back-end logic:
// var userSentence = "";
// var userSentenceArray = userSentence;
// var vowels = ['a','e','i','o','u']
// for(var index = 0; index <= vowels.length; index += 1) {
//   if (userSentence.charAt(0) === vowels[index]) {
//     result = userSentence + "ay";
//   }
// }
//Front-end logic:
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    var userSentenceArray = userSentence.split(" ");
    var result = [];
    var vowels = ['a','e','i','o','u']

    userSentenceArray.forEach(function(word) {
      for(var index = 0; index <= vowels.length; index += 1) {
        if (userSentence[0] === vowels[index]) {
          result = userSentence + "ay";
        }
      }
    });

    $("#result").text(result);

  });

});
