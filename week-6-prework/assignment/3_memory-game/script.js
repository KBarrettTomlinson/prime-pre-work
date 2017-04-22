console.log('Test Sourced');

var onReady = function() {
  console.log('doc ready');
  //TODO Add your code below to attach your event listeners to functions:
  $('#revealHide').on('click',function(){
    revealHide();
  });

  $('.cardDiv').on('click',function(){
    singleClickFunc($(this));
  });
};

// on document ready run the onReady function
$(document).ready(onReady);


// revealHide function hides and shows all cards
function revealHide() {
  //TODO add your code here to get the desired functionality
  console.log("You called revealHide");
  $('.cardImg').toggle();
}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc(card) {
  //TODO add your code here to get the desired functionality
  console.log("You called singleClickFunc");
  $(card.children("img")).toggle();
}
