$(document).ready(function(){
// var width=$(window).width();
//
// var height=$(window).height();

  $('#red').click(function() {
    $('.ball').toggleClass("red");
  });

  $('#blue').click(function() {
    $('.ball').toggleClass("blue");
  });

  $('#green').click(function() {
    $('.ball').toggleClass("green");
  });

  $('#hide_show').click(function() {
    $('.ball').toggleClass("hidden");

  });

  $('#topbox').click(function() {
    $('.ball').animate({bottom:'+=10'},100);
  });

  $('#leftbox').click(function() {
    $('.ball').animate({left:'-=10'},200);
  });
  $('#rightbox').click(function() {
    $('.ball').animate({left:'+=10'},200);
  });
  $('#bottombox').click(function() {
    $('.ball').animate({bottom:'-=10'},200);
  });
})
