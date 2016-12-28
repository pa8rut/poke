$("#myButton").click(function(){
  var myIn = $("#myInput").val();
  
  var myURL = "https://pokeapi.co/api/v2/pokemon/" + myIn + "/";
  
  $.ajax({
    method: "GET",
    url: "myURL",
    success: function(data);
  });
});
