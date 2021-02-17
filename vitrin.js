
function home(){
  document.getElementById("body").style.display="grid";
  document.getElementById("page2").style.display="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="none";
  
}
function showme(){
  document.getElementById("body").style.display="none";
  document.getElementById("page2").style.display="none";
  document.getElementById("page3").style.display="grid";
  document.getElementById("page4").style.display="none";
  
}
function contact(){
  document.getElementById("body").style.display="none";
  document.getElementById("page2").style.display="grid";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="none";
  
}
function about(){
  document.getElementById("body").style.display="none";
  document.getElementById("page2").style.display="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page4").style.display="grid";
  
}









var CAKE = document.getElementById("CAKE");
setInterval(changecolor,100);
function changecolor(){
    var r = Math.floor(Math.random()*213);
    var g = Math.floor(Math.random()*112);
    var b = Math.floor(Math.random()*12);
     CAKE.style.color = "RGB("+r+","+g+","+b+")";
}

var COOKIES = document.getElementById("COOKIES");
setInterval(change,100);
function change(){
    var r = Math.floor(Math.random()*228);
    var g = Math.floor(Math.random()*126);
    var b = Math.floor(Math.random()*10);
    COOKIES.style.color = "RGB("+r+","+g+","+b+")";
}
changecolor();
change();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


var slideIndex = 1;
show(slideIndex);

function plus(n) {
  show(slideIndex += n);
}
function show(n) {
  var i;
  var x = document.getElementsByClassName("sliderW");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function myfonction(){
  var navbar = document.getElementById("header");
  navbar.classList.toggle("show");

}








