//The essence of this homework is

//Create an array to add items
var items = ["japan","morracco","egypt","tibet"]
//Link those items to the page with a data-img on an attribute

//From that data value add to paramenter for giphy to return images
//Make Div for buttons
//Make form input box
//Make button to add more items


  $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    var state = $(this).attr("data-state");
    if (state == "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "moving");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });