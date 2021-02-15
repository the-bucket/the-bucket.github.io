var curpage = location.href.split("/").slice(-1);

var pages = {
  "": document.getElementById('index-nav'),
  "#": document.getElementById('index-nav'),
  "index.html": document.getElementById('index-nav'),
  "index.html#": document.getElementById('index-nav'),
  "ramblings.html": document.getElementById('ramblings-nav'),
  "ramblings.html#": document.getElementById('ramblings-nav'),
  "tokipona.html": document.getElementById('tokipona-nav'),
  "tokipona.html#": document.getElementById('tokipona-nav'),
  "other.html": document.getElementById('other-nav'),
  "other.html#": document.getElementById('other-nav'),
  "about.html": document.getElementById('about-nav'),
  "about.html#": document.getElementById('about-nav'),

}

var test = document.getElementsByClassName("navli");
var highlight = document.getElementById('highlight');
var navbar = document.getElementById('navbar');
var container = document.getElementById('container');
let travelspeed = 5;
var widthspeed = 2;
var highlightInterval;
var idealPos, idealLength;
var done = false;

/*const onMouseMove = (e) =>{
  idealPos = e.pageX;
}*/

//document.addEventListener('mousemove', onMouseMove);

highlight.style.left = pages[curpage].getBoundingClientRect().left + window.scrollX + "px";
highlight.style.width = pages[curpage].getBoundingClientRect().width + "px";

window.onload = reload;
window.onresize = reload;

container.classList.add('fade');


function reload(){
  highlight.style.left = pages[curpage].getBoundingClientRect().left + window.scrollX + "px";
  highlight.style.width = pages[curpage].getBoundingClientRect().width + "px";
}



for(var i = 0; i < test.length; i++){
  test[i].addEventListener("mouseover", function(event){
    clearInterval(highlightInterval);

    idealPos = this.getBoundingClientRect().left + window.scrollX;
    idealWidth = this.getBoundingClientRect().width;

    moveHighlight();
    highlightInterval = setInterval(moveHighlight, 1);
  });

}

navbar.addEventListener('mouseout', function(){
  clearInterval(highlightInterval);
  idealPos = pages[curpage].getBoundingClientRect().left + window.scrollX;
  idealWidth = pages[curpage].getBoundingClientRect().width;
  moveHighlight();
  highlightInterval = setInterval(moveHighlight, 1);
});



function moveHighlight() {
  var lbStyle = window.getComputedStyle(highlight);
  var leftValue = lbStyle.getPropertyValue("left").replace("px", "");
  var widthValue = highlight.style.width.replace("px", "");

  if(leftValue > idealPos - travelspeed && leftValue < idealPos + travelspeed){
    highlight.style.left = idealPos + "px";
    highlight.style.width = idealWidth + "px";
    clearInterval(highlightInterval);
    return;
  }
  else if(leftValue > idealPos){
    highlight.style.left = (Number(leftValue) - travelspeed) + "px";
  }
  else if (leftValue < idealPos){
    highlight.style.left = (Number(leftValue) + travelspeed) + "px";
  }


  if(widthValue > idealWidth){
    highlight.style.width = (Number(widthValue) - widthspeed) + "px";
  }
  else if (widthValue < idealWidth){
    highlight.style.width = (Number(widthValue) + widthspeed) + "px";
  }
}
