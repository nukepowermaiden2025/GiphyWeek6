//The essence of this homework is to create an array of button that make calls
//to the giphy api and return 10 pictures that pertain to the subject of the button.
//I need to be able to add more buttons and those buttons 
//should go through the same process and generate dynamically

//Create an array to add items

var places =["australia","antartica","brazil","canada","germany","malawi"];
var destination;




 function renderButtons(){

  $("#btn-go-here").empty();//clear previous buttons from div

   //Render Buttons //Add classes and attributes
    for(i=0; i< places.length; i++){
    
      let $btn = $("<button>")
      $btn.addClass("btn btn-success btn-lg choice" );
      $btn.attr({//Link those items to the page with a data-img on an attribute
                  type: "submit", 
                  "data-place":places[i],
                  
                  });
      $btn.text(places[i]);
      $("#btn-go-here").append($btn);  
    }
 };


 renderButtons();

$(document).on("click", "#add-to-places", function (event) {
  event.preventDefault();
  destination=$("#destination").val().trim();

    if(destination in places ){//troubeshoot error catching
    alert("You already went there")
    }
    else{
      places.push(destination);
    }
  console.log(destination);
  console.log(places);
  renderButtons();
  
});



//Add onclick for buttons to make an ajax call
$(document).on("click",".choice", function(event) {
 
  //Retrieve the attribute of data-place for the button pushed
  const place = $(this).attr("data-place");
  const apikey =  "&api_key=3bCo19ThIMVPxPyB6WKeiwD05PgMMyNB&limit=10"
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  place + apikey ;
  

  //Fire of a request to giphy api
  $.ajax({
    url: queryURL,
    method:"GET"
  })
    .then(function(response){//after a response from giphy do something with the respnse
      var results = response.data;//convience 
      console.log(results)
      // With each of the max ten results in response back from giphy
      for(var i=0; i<results.length;i++){
        if(results[i].rating !== "r" && results[i].rating !== "pg-13"){
          var placeimg = $("<img>");//create img
          placeimg.attr({//Link those items to the page with a data-img on an attribute
            "data-animate":results[i].images.fixed_height.url,//add animate
            "data-still": results[i].images.fixed_height_still.url,//add the still 
            state:"data-state",
            src:"",
            width: 400,
            height: 175,
            "margin-left": 5,
            "margin-right":5,
            "margin-top":10
          });
          $(placeimg).attr("src", results[i].images.fixed_height.url);
          $("#gifdiv").prepend(placeimg)
          renderButtons();

        }
      }
    });

  

});








  
  //From that data value add to paramenter for giphy to return images

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