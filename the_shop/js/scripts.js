$(".Change_color_one").on("click", function () {
	$(this).toggleClass("active") 
	$(".Change_color_two").removeClass("active") 
	$(".Change_color_three").removeClass("active") 
	$(".Color_one").toggleClass("Color_one")
	$(".Color_two_invisible").removeClass("Color_two")
	$(".Color_three_invisible").removeClass("Color_three")
});


$(".Change_color_two").on("click", function () {
	$(this).toggleClass("active") 
	$(".Change_color_one").removeClass("active") 
	$(".Change_color_three").removeClass("active") 
	$(".Color_two_invisible").toggleClass("Color_two")
	$(".Color_one").toggleClass("Color_one_invisible")
	$(".Color_three_invisible").removeClass("Color_three")
});

$(".Change_color_three").on("click", function () {
	$(this).toggleClass("active") 
	$(".Change_color_one").removeClass("active") 
	$(".Change_color_two").removeClass("active") 
	$(".Color_three_invisible").toggleClass("Color_three") 
	$(".Color_one").toggleClass("Color_one_invisible")
	$(".Color_two_invisible").removeClass("Color_two")
});
