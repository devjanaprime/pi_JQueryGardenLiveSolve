console.log( 'garden.js sourced' );
// global array for our garden
var garden=[];

$( document ).ready( function(){
  console.log( 'doc ready JQ');

  $( '#plantNow').on( 'click', function(){
    console.log( 'in plantNow on click');
    // get user input and put in an object
    var newPlant = {
      name: $( '#nameIn' ).val(),
      number: $( '#numberIn' ).val()
    }; // end newPlant
    garden.push( newPlant );
    // display garden
    displayGarden();
  }); // end plantNow on click
}); // end doc ready

var displayGarden = function(){
  console.log( 'in displayGarden' );
  console.log( garden );
  // output string variable to be appended
  // must be declared out side of loop
  var outputString = '';
  // loop through garden and display in outputDiv
  for (var i = 0; i < garden.length; i++) {
    // append this plant to output string
    outputString += '<p>' + garden[i].number + ' ' + garden[i].name + '(s)</p>';
    console.log( outputString );
  } // end for
  $( '#outputDiv' ).html( outputString );
}; // end displayGarden
