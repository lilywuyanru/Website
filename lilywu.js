(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$("#returnMenu").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('#returnMenu').fadeIn();
			} else {
				$('#returnMenu').fadeOut();
			}
		});

	
	});

  var $root = $('html, body');

  $('a[href^="#"]').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });
});
	}(jQuery));
	

var sketch_array = ["sketch1.jpg", "sketch2.jpg", "sketch3.jpg","sketch4.jpg", "sketch5.jpg"];
var painting_array = ["painting1.jpg", "painting2.jpg", "cool.jpg"];
var image_index = 0;

function leftPainting(){
	image_index -= 1;
	if(image_index >= 0){
		document.getElementById("paintingImg").src = painting_array[image_index];
	}
	else{
		image_index = 0;
		document.getElementById("paintingImg").src = painting_array[image_index];
	}}

function rightPainting(){
	image_index += 1;
	if(image_index <= painting_array.length - 1){
		document.getElementById("paintingImg").src = painting_array[image_index];
	}
	else{
		image_index = [painting_array].length - 1;
		document.getElementById("paintingImg").src = painting_array[image_index];
	}
}

function leftSketch(){
	image_index -= 1;
	if(image_index >= 0){
		document.getElementById("sketchImg").src = sketch_array[image_index];
	}
	else{
		image_index = 0;
		document.getElementById("sketchImg").src = sketch_array[image_index];
	}}

function rightSketch(){
	image_index += 1;
	if(image_index <= sketch_array.length-1){
		document.getElementById("sketchImg").src = sketch_array[image_index];
	}
	else{
		image_index = sketch_array.length - 1;
		document.getElementById("sketchImg").src = sketch_array[image_index];
	}
}
