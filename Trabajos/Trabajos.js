var full=false;
var demoId = document.getElementById ('hiddenText');

$('.imgWrap').hover(function () {
 // $(this).css('width', '36%');
  $(this).addClass('current');
  //demoId.style.visibility = "visible";
  //$(this).siblings().css('width', '16%');  
   $(this).siblings().addClass('notCurrent');
}, function () {
  //$('.imgWrap').css('width', '20%');  
  $('.imgWrap').siblings().removeClass('notCurrent');
  //demoId.style.visibility = "hidden";
  $('.imgWrap').removeClass('current');
 });

$('.imgWrap1').click(function () {  
    window.location = "VieRomantique/VieRomantique.html"
});
$('.imgWrap2').click(function () {  
    window.location = "MendozaDeluxe/MendozaDeluxe.html"
});
$('.imgWrap3').click(function () {  
    window.location = "ECA/ECA.html"
});
$('.imgWrap4').click(function () {  
    window.location = "MStreetBar/MStreetBar.html"
});
$('.imgWrap5').click(function () {  
    window.location = "Bohemia/Bohemia.html"
});


$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  }
});