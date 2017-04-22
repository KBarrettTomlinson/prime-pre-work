$(document).ready(function() {

  /*var originalHeight = $('#catImg').height();
  console.log($('#catImg').height());
  console.log("originalHeight",originalHeight);
  var originalWidth = $('#catImg').width();
  console.log("originalWidth",originalWidth);*/


  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
  $( '#fadeDiv' ).on( 'click', function(){
    fadeCat();
  });
  $( '#hideDiv' ).on( 'click', function(){
    hideCat();
  });
  $( '#animateDiv' ).on( 'click', function(){
    animateCat();
  });
  $( '#resetDiv' ).on( 'click', function(){
    resetCat();
  });
});


// nav bar function to fade when mouse enters button
function mouseEnterButton() {
  $(this).fadeTo('fast', 0.5);
  console.log('enter');
}

// nav bar function to fade when mouse enters button
function mouseLeaveButton() {
  console.log('leave');
  $(this).fadeTo('fast', 1);
}

// hideCat is a function to hide the cat image when that button is clicked
function hideCat() {
  //TODO your function code here
  // hide catImg
  // append '<p>hide toggle</p>' to 'clickList'
  console.log("hideCat");
  $('#catImg').toggle(function(){
    if ($('#catImg').is(':hidden')){
      $('#hideDiv').text("Show Me!");
      $('#fadeDiv').text("Fade Me In!");
    }
    else{
      $('#hideDiv').text("Hide Me!");
      $('#fadeDiv').text("Fade Me Out!");
    }
    });
    $('#clickList').append('<p>hide toggle</p>');
}

// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat() {
  //TODO your function code here
  // toggle catImg fade
  // append '<p>fade toggle</p>' to 'clickList'
  console.log("fadeCat");
  $('#catImg').fadeToggle('slow','linear',function(){
    if ($('#catImg').is(':hidden')){
      $('#fadeDiv').text("Fade Me In!");
      $('#hideDiv').text("Show Me!");
    }
    else {
      $('#fadeDiv').text("Fade Me Out!");
      $('#hideDiv').text("Hide Me!");
    }
  });
  $('#clickList').append('<p>fade toggle</p>');
}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat() {
  //TODO your function code here
  // animate catImg
  // append '<p>animate</p>' to 'clickList'
  console.log("animateCat");
  if ($('#catImg').is(':hidden')){
    $('#catImg').toggle();
    $('#fadeDiv').text("Fade Me Out!");
    $('#hideDiv').text("Hide Me!");
    $('#clickList').append('<p>show before animate</p>');
  }
  $('#catImg').height( $('#catImg').height() + 10);
  $('#catImg').width( $('#catImg').width() + 10);
  $('#clickList').append('<p>animate</p>');
}

// PRO MODE
// resetCat is a function to reset the cat photo to it's original size
// when that button is clicked.
function resetCat() {
  // reset catImg
  // append '<p>reset</p>' to 'clickList'
  console.log($('#catImg').height());
  console.log($('#catImg').width());
  console.log("resetCat");
  //console.log(height,width);
  $('#fadeDiv').text("Fade Me Out!");
  $('#hideDiv').text("Hide Me!");
  /*$('#catImg').height(height);
  $('#catImg').width(width);*/
  $('#catImg').removeAttr('style');
  if ($('#catImg').is(':hidden')){
    $('#catImg').toggle();
  }
  $('#clickList').empty();
  $('#clickList').append('<p>reset</p>');
}
