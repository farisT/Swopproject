$(function() {

	//highlight the current nav
	$("#swopwomenPage a:contains('Swop women')").parent().addClass('active');
	$("#swopmenPage a:contains('Swop men')").parent().addClass('active');
	$("#aboutPage a:contains('About')").parent().addClass('active');
	$("#howitworksPage a:contains('How it works')").parent().addClass('active');
	$("#signupPage a:contains('Sign up')").parent().addClass('active');
	$("#loginPage a:contains('Login')").parent().addClass('active');
	$("#logoutPage a:contains('Logout')").parent().addClass('active');

	$("#uploaditemPage a:contains('Add item')").parent().addClass('active');
	
	// if($("#photographer_pack a:contains('Photographer\'s Package')").parent().hasClass('active')){
	// $(".dropdown a:contains('Our Programs')").parent().addClass('active');
	// }
	
	// if($("#joomla a:contains('Joomla Training')").parent().hasClass('active')){
	// $(".dropdown a:contains('Our Programs')").parent().addClass('active');
	// }

	//make menus drop automatically
	// $('ul.nav li.dropdown').hover(function() {
	// 	$('.dropdown-menu', this).fadeIn();
	// }, function() {
	// 	$('.dropdown-menu', this).fadeOut('fast');
	// });//hover
	
}); //jQuery is loaded