//The essence of this homework is to create an array of button that make calls
//to the giphy api and return 10 pictures that pertain to the subject of the button.
//I need to be able to add more buttons and those buttons 
//should go through the same process and generate dynamically
//Create an array to add items
var items = ["japan","morracco","egypt","tibet"]

//Add attributes to get a value to call against//
//Add classes to select 
var btn = $("<button>")


//Render Divs with classes
for(let i=0; i<items.length;i++){
}
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