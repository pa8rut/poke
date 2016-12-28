$("#myButton").click(function(){
  var myIn = $("#myInput").val();
  
  var myURL = "https://pokeapi.co/api/v2/pokemon/" + myIn + "/";
  
  $.ajax({
    method: "GET",
    url: "myURL",
    success: function(data){
      $("#poke-name").html(data.name);
      
      $("#poke-img").attr("src", data.sprites.front_default);
    }
  });
});
