/**
 * 
 */
//alert("hi");
function myFunction() {
	homedivHide();
	document.getElementById("searchbutton").disabled = true;
}
function cardHide() {
	$('#mobile-card').hide();
	$('#tv-card').hide();
	$('#home-app-card').hide();
	$('#kids-card').hide();
	$('#beauty-card').hide();
	$('#sports-card').hide();
}
function cardShow() {
	$('#mobile-card').show();
	$('#tv-card').show();
	$('#home-app-card').show();
	$('#kids-card').show();
	$('#beauty-card').show();
	$('#sports-card').show();
}
function homedivHide() {
	$('#home-container').hide();
	$('#offers-container').hide();
	$('#myorders-container').hide();
	$('#mobilelist-items-container').hide();
	closeNav();
}
function homeFunction() {
	$('#home-container').show();
	$('#offers-container').hide();
	$('#myorders-container').hide();
	$('#mobilelist-items-container').hide();
	closeNav();
	cardShow()
}
function offerFunction() {
	$('#home-container').hide();
	$('#offers-container').show();
	$('#myorders-container').hide();
	$('#mobilelist-items-container').hide();
	closeNav();
}

function myOrdersFunction() {
	$('#home-container').hide();
	$('#offers-container').hide();
	$('#myorders-container').show();
	$('#mobilelist-items-container').hide();
	closeNav();
}
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
function textChange() {
	document.getElementById("searchbutton").disabled = false;
}
function searchClick() {
	alert();
}

function mobilePhoneListClick() {
	$('#mobilelist-items-container').show();
	cardHide();
}
function tvListClick() {
	$('#mobilelist-items-container').show();
	cardHide();
}
function homeApplianceListClick() {
	$('#mobilelist-items-container').show();
	cardHide();
}
function kidsListClick() {
	$('#mobilelist-items-container').show();
	cardHide();
}
function beautyListClick() {
	$('#mobilelist-items-container').show();
	cardHide();
}
function sportsListClick() {
	$('#mobilelist-items-container').show();
	cardHide();
}
function mousehomeOver(element) {
	document.getElementById("home-menu").style.color = "red";
}
function mousehomeOut() {
	document.getElementById("home-menu").style.color = "white";
}
function mouseoffersOver(element) {
	document.getElementById("offers-menu").style.color = "red";
}
function mouseoffersOut() {
	document.getElementById("offers-menu").style.color = "white";
}
function mouseordersOver(element) {
	document.getElementById("orders-menu").style.color = "red";
}
function mouseordersOut() {
	document.getElementById("orders-menu").style.color = "white";
}
function mousewalletOver(element) {
	document.getElementById("wallet-menu").style.color = "red";
}
function mousewalletOut() {
	document.getElementById("wallet-menu").style.color = "white";
}
function mousehelpOver(element) {
	document.getElementById("help-menu").style.color = "red";
}
function mousehelpOut() {
	document.getElementById("help-menu").style.color = "white";
}
function mouselogoutOver() {
	document.getElementById("logout-menu").style.color = "red";
}
function mouselogoutOut() {
	document.getElementById("logout-menu").style.color = "white";
}


