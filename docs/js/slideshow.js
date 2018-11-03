$(document).ready(function(){

	var slideIndex = 0;

	showPhotos();

	function showPhotos(){
		var slides = $('#instafeed img');
		console.log(slides);
		console.log(slides.length);

		for (var i = 0; i< slides.length; i++) {
			console.log(i);
			$(slides[i]).hide();
		}

		slideIndex++;

		if (slideIndex > slides.length) {
			slideIndex = 1;
		}
		console.log(slideIndex);

		$(slides[slideIndex-1]).show();

		setTimeout(showPhotos,1000);
	}
	
});