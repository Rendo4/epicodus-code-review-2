$(document).ready(function() {
    $("#info").submit(function(event) {
      event.preventDefault();
      const q1 = parseInt($("#q1").val());
      const q2 = parseInt($("#q2").val());
      const q3 = parseInt($("#q3").val());
      const q4 = parseInt($("#q4").val());
      const q5 = parseInt($("#q5").val());
      const result = q1 + q2 + q3 + q4 +q5;
      
     
      if (result > 4 && result <11) {
        recommendation = "Javascript";
        $(".js").show();
      } else if (result > 10 && result < 16 ) {
        recommendation = "Python";
        $(".p").show();
      } else if (result > 15 && result < 20) {
        recommendation = "C#";
        $(".c").show();
      } else if (result === 20) {
          recommendation = "nothing. You didn't take this quiz seriously! I forgive you though"
          $("t").show();
      } else {
          recommendation = "complete survey";
      }
      
      $(".answer").text(recommendation);
      $("#suggestion").show();
    });
});