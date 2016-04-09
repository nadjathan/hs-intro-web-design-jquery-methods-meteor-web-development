// initialize jQuery command after all page elements load

$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

  //hide
  $("#b1").click(function(){
    $("#p1").hide(1000);
  });

  //show
  $("#b2").click(function(){
    $("#p1").show(1000);
  });


  //toggle
  $("#b3").click(function(){
    $("#p1").toggle();
  });


  //css
   $("#b4").click(function(){
    $("#p2").css("background-color", "yellow");
  });


  //css (multiple property changes)
   $("#b5").click(function(){
    $("#p2").css("background-color": "yellow", "font-size" : "200%");
  });


  //html
  $("#b6").click(function(){
    $("#p3").html("Hello my name is nadja");
  });


  //prepend
  $("#b7").click(function(){
    $("#p3").prepend("<p> Test </p>");
  });


  //append
   $("#b8").click(function(){
    $("#p3").append("<p> Test1 </p>");
  });




  //before
   $("#b8").click(function(){
    $("#p3").before("<p> Test2 </p>");
  });


  //after
   $("#b9").click(function(){
    $("#p4").after("<p> Test3 </p>");
  });


  //wrap
    $("#b11").click(function(){
    $("#p5").wrap("<div class='new'></div>");
  });


  //addClass
   $("#b12").click(function(){
    $("#p5").addClass("myClass");
  });


  //clone
    $("#b12").click(function(){
    $("ul>li").clone("myClass");
  });




  //fadeOut


  //fadeIn


  //fadeToggle


  //slideUp


  //slideDown


   //slideToggle


  //animate


});