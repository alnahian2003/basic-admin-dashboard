$(document).ready(function () {
  $(".sideMenuToggler").on("click", function () {
    $(".wrapper").toggleClass("expand");
  });

  //   Display Random Number
  var rand1 = Math.random() * 100;
  var rand2 = Math.random() * 1000;
  $(".random-number1").html(Math.floor(rand1));
  $(".random-number2").html(Math.floor(rand2));
});
