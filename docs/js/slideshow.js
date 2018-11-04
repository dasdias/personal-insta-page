$(document).ready(function(){

	var slideIndex = 0;
	var slideIndex2 = 0;

	showPhotos();
	

	function showPhotos(){
		var slides = $('#instafeed a');
		// console.log(slides);
		// console.log(slides.length);

		for (var i = 0; i< slides.length; i++) {
			// console.log(i);
			$(slides[i]).hide();
		}

		slideIndex++;

		if (slideIndex > slides.length) {
			slideIndex = 1;
		}
		// console.log(slideIndex);

		$(slides[slideIndex-1]).show();

		setTimeout(showPhotos,1000);
	};

	showPhotosInsta();

	function showPhotosInsta(){
		var slides = $('.photo2 img');
		console.log(slides);
		// console.log(slides.length);

		for (var i = 0; i< slides.length; i++) {
			// console.log(i);
			$(slides[i]).hide();
		}

		slideIndex2++;

		if (slideIndex2 > slides.length) {
			slideIndex2 = 1;
		}
		// console.log(slideIndex);

		$(slides[slideIndex2-1]).show();

		setTimeout(showPhotosInsta,1000);
	};
	
});