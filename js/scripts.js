$(document).ready(function() {
    $("#info").submit(function(event) {
      event.preventDefault();
      const q1 = parseInt($("#q1").val());
      const q2 = parseInt($("#q2").val());
      const q3 = parseInt($("#q3").val());
      const q4 = parseInt($("#q4").val());
      const q5 = parseInt($("#q5").val());
      const result = q1 + q2 + q3 + q4 +q5;
      console.log(result);
     
      if (result > 4 && result <11) {
        recommendation = "option 1";
      } else if (result > 10 && result < 16 ) {
        recommendation = "option 2";
      } else if (result > 15 && result < 20) {
        recommendation = "option 3";
      } else if (result === 20) {
          recommendation = "option 4"
      } else {
          recommendation = "complete survery";
      }
      console.log(recommendation);
    });
});