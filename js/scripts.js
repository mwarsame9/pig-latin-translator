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
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

    userSentenceArray.forEach(function(word) {
      for(var index = 0; index <= vowels.length; index += 1) {
        if (userSentence[0] === vowels[index]) {
          result = userSentence + "ay";
        }
      }
    });
    userSentenceArray.forEach(function(word) {
      for(var i = 0; i <= consonants.length; i += 1) {
        if (userSentence[0] === consonants[i]) {
          var userSentenceString = userSentenceArray.join();
          var moveConsonant = userSentenceString.slice(0, 1);
          console.log(moveConsonant);
          console.log(userSentenceString);
          result = userSentenceString.concat(moveConsonant) + "ay";
          console.log(result);
        }
      }
    })

    $("#result").text(result);

  });

});
