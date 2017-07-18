$(document).ready(function() {

      // Initial Variables
      //var computerPick = Math.floor(Math.random()* 112 + 19);
      //var yourPick = 0;
      //var scoreArray = [];
      var wins = 0;
      var losses = 0;
      var math = 0;
      
      //generate random number
      var number = Math.floor((Math.random() * 112) + 19);

      //random crystal power
      var blue = Math.floor(Math.random() * 12 + 1);
      var green = Math.floor(Math.random() * 12 + 1);
      var red = Math.floor(Math.random() * 12 + 1);
      var yellow = Math.floor(Math.random() * 12 + 1);

      var configmath = function() {
        $('#wins').empty();
        $('#wins').append(wins);
        $('#losses').empty();
        $('#losses').append(losses);
        $('.math').empty();
        $('.math').append(math);
      }
      var reset =  function() {
        math = 0;
      $('#number').empty();
      $('#number').append(number);

        blue = Math.floor((Math.random() * 12) + 1);
        green = Math.floor((Math.random() * 12) + 1);
        red = Math.floor((Math.random() * 12) + 1);
        yellow = Math.floor((Math.random() * 12) + 1);
        configmath();
      }

      var config = function () {
        if (math == number) {
          wins = wins + 1;
          reset();
      }
        else if (math > number) {
          losses = losses + 1;
          reset();
      }
        else {
          configmath();
      }}
    
        $('.math').append(math);
        $('#number').append(number);

        $(document).ready(function(){
        $('#blue').click(function(){
            math = math + blue;
            config();
        })

        $('#red').click(function(){
            math  = math  + red;
            config();
        })

        $('#yellow').click(function(){
            math  = math  + yellow;
            config();
        })

        $('#green').click(function(){
            math  = math  + green;
            config();
       })
});

});   