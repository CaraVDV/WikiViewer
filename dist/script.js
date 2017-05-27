// script
/***************
dependencies: 
Jquery
****************/
$( document ).ready(function() {

  $(".icon").on("click", function(){ iconToBar(); });
  $("#x").on("click", function(){ barToIcon(); });

	function iconToBar(){
		console.log("icon clicked.");
		$("#search-bar").removeClass("small");
		$(".icon").addClass("hide");
		setTimeout(function(){
			$("#x").removeClass("hide");
			$("#search-input").removeClass("hide");
		}, 400);
		
	}

	function barToIcon(){
		console.log("x button clicked.");
		$("#x").addClass("hide");
		$("#search-input").addClass("hide");
		$("#search-bar").addClass("small");
		setTimeout(function(){
			$(".icon").removeClass("hide");
		}, 400);
	}
});
