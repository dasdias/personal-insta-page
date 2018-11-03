$(document).ready(function(){ 
	 var userFeed = new Instafeed({
        get: 'user',
        userId: '4155440794',
        accessToken: '4155440794.1677ed0.1de372434be2417ca162513d6270bb18',
    	resolution: 'standard_resolution',
    	limit: 33
    });
    userFeed.run();

    setTimeout(function(){
    	$('.instafeed').addClass('shadowed');
    }, 100);
});