$("a.reload").click(function(e) {
  e.preventDefault();
  
  $("div.circle1").removeClass("dot1");
  $("div.circle2").removeClass("dot2");
  $("div.circle3").removeClass("dot3");
  $("div.circle4").removeClass("dot4");
  $("div.circle5").removeClass("dot5");
  $("div.circle6").removeClass("dot6");
  $("div.circle7").removeClass("dot7");
  $("li").removeClass("animated-title");
  
  setTimeout(function(){
  $("div.circle1").addClass("dot1");
  $("div.circle2").addClass("dot2");
  $("div.circle3").addClass("dot3");
  $("div.circle4").addClass("dot4");
  $("div.circle5").addClass("dot5");
  $("div.circle6").addClass("dot6");
  $("div.circle7").addClass("dot7");
  $("li").addClass("animated-title");
    
  }, 500);
 });