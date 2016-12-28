$("#myButton").click(function(){
  var myInput = $("#myInput");
  
  var myURL = "https://pokeapi.co/api/v2/pokemon/" + myInput + "/";
  
  $.ajax({
    method: "GET",
    url: "myURL",
    success: function(data);
  });
});
