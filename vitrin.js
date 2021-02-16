var CAKE = document.getElementById("CAKE");
setInterval(changecolor,100);
function changecolor(){
    var r = Math.floor(Math.random()*245);
    var g = Math.floor(Math.random()*0);
    var b = Math.floor(Math.random()*0);
     CAKE.style.color = "RGB("+r+","+g+","+b+")";
}

var COOKIES = document.getElementById("COOKIES");
setInterval(change,100);
function change(){
    var r = Math.floor(Math.random()*245);
    var g = Math.floor(Math.random()*0);
    var b = Math.floor(Math.random()*0);
    COOKIES.style.color = "RGB("+r+","+g+","+b+")";
}
changecolor();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

