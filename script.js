$(document).ready(function() {
  $("#searchButton").on("click", function(e){
    e.preventDefault();
    $("#output").html("");
    var searchQuery = $("#searchBox").val();
    var apiCall = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery + "&limit=10&namespace=0&format=json&callback=?";
    
    $.getJSON(apiCall, function(data) {
      $("#output").html(function() {
        for(var i=0;i<data[1].length;i++) {
          $("#output").append(
            "<hr><h2>" + data[1][i] + "</h2>" + 
            "<p>" + data[2][i] + "</p>"
            + "<a class='btn btn-default' href='" + data[3][i] + "' target='_blank'>Learn More</a>"
          );
        }
      });
    });
  });
});