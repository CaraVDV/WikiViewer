// script
/***************
dependencies: 
Jquery
****************/
$( document ).ready(function() {
  $(".icon").on("click", function(){ iconToBar(); });
  $("#x").on("click", function(){ barToIcon(); });
  $('#search-form').submit(function(event){ findWikiArticles(event); });

	function iconToBar(){
		console.log("icon clicked.");
		$(".tail").addClass("slide");
		setTimeout(function(){
			$("#search-bar").removeClass("small");
			$(".icon").addClass("hide");
			setTimeout(function(){
				$("#x").removeClass("hide");
				$("#search-form").removeClass("hide");
			}, 450);
		}, 200);	
	}

	function barToIcon(){
		console.log("x button clicked.");
		$("#x").addClass("hide");
		$("#search-form").addClass("hide");
		$("#search-bar").addClass("small");
		setTimeout(function(){
			$(".icon").removeClass("hide");
			setTimeout(function(){
				$(".tail").removeClass("slide");
			}, 50);
		}, 450);
	}

function findWikiArticles(event){
	event.preventDefault();
	var apiUrl;
	var searchStr = $('#search-input').val();
	console.log("Search submitted for " + searchStr);
	apiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchStr+'&limit=10&namespace=0&format=json&callback=?';
	console.log(apiUrl);
	$('#wiki-list').empty();
	$.getJSON(apiUrl, function(wikiJson){
		console.log('JSON retrieved.');
		console.log(wikiJson);
		generateList(wikiJson);
	});
}

function generateList(json){
	for( var i=0; i < json[1].length; i++){
		$('#wiki-list').append(
				'<a class=\"preview\" href=\"'+json[3][i]+'\" target=\"_blank\">'
				+' <div class=\"text\"><h2>' +json[1][i]+ '</h2> '
				+' <p class=\"desc\">' +json[2][i]+ '</p></div>'
			);
	};
}

});  //page ready
