$(document).ready(function()
{
  $("#Toggle").click(function()
  {
	$("#test").slideToggle(1000);
  });
  
  $("#Red").mouseover(function() 
  {
    $("#test").css("color","red");
  });
  $("#Blue").mouseover(function() 
  {
    $("#test").css("color","blue");
  });
  
});