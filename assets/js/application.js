$(function(){

	// Wait for window load
	$(window).bind("load", function() {
		$(".overlay").hide();
	});

	//////////////////////////
	// UI 
	//////////////////////////

	// Resizable Windows
	$(".window").resizable({ 
		handles: "se" 
	});

	// Draggable windows
	$(".window").draggable({
		handle: ".info-bar", 
		stack: ".window",
		containment: "parent",
		scroll: true
	});

	// Maximize window
	$(".maximize").click(function(){
		$(this).closest(".window").toggleClass("window-max");
	});

	// Minimize Window
	$(".minimize").click(function(){
		$(this).closest(".window").removeClass("window-max");
	});

	//Close Window
	$(".close").click(function(){
		$(this).closest(".window").fadeOut();
	});

	//////////////////////////
	// Search
	//////////////////////////

	// Focus on the search when hovered over
	$(".search").hover(function(){
		$(this).focus();
	});

	$(".search").keyup(function(){
		// Show the Search Overlay 
		$(".search-overlay").show();

		var value = $(this).val();

		$(".results-info h2").text(value);

		// TODO: Ajax Call
	});

	$(".search").blur(function(){
		// On blur, hide the search overlay
		$(".search-overlay").hide();
	});

	//////////////////////////
	// Overlays
	//////////////////////////

	// Main function
	function modal( target ) {
		$("." + target + "-overlay").fadeIn();
		$("." + target + "-modal").delay(300).addClass("modal-view");
	}

	// New Code CRUD
	$(".new-code-toggle").click( function(){
		modal("new"); 
	});

	// Close Overlay
	$(".close-overlay").click(function(){
		$(".modal").removeClass("modal-view");
		$(".overlay").delay(300).fadeOut();
	});
})