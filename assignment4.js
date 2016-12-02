// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  $("#results").hide();
  console.log('Keepin\'n it clean with an external script!');
})();

$(function() {
  $(".flexsearch-input").on("input", function() {
      $("#results").html("");
      var textInput = $(".flexsearch-input").val();
      if(textInput.length > 0){
        $("#results").show();
        $.ajax({
          dataType: "json",
          url: "http://www.mattbowytz.com/simple_api.json?data=all",
          success: function(response) {
            $.each(response.data, function(key1, val1){
              $.each(val1, function(key2, val2){
                if(val2.toLowerCase().search(textInput) > -1){
                  $("#results").append("<li>"+val2+"</li>");
                }
              })
            })
          }
        });
      }
      else {
        $("#results").html("");
        $("#results").hide();
      }
  });
});
