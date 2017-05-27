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
		$(".tail").addClass("slide");
		setTimeout(function(){
			$("#search-bar").removeClass("small");
			$(".icon").addClass("hide");
			setTimeout(function(){
				$("#x").removeClass("hide");
				$("#search-input").removeClass("hide");
			}, 450);
		}, 200);	
	}

	function barToIcon(){
		console.log("x button clicked.");
		$("#x").addClass("hide");
		$("#search-input").addClass("hide");
		$("#search-bar").addClass("small");
		setTimeout(function(){
			$(".icon").removeClass("hide");
			setTimeout(function(){
				$(".tail").removeClass("slide");
			}, 50);
		}, 450);
	}
});
