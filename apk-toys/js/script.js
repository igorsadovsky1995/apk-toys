
var ibg = document.getElementsByClassName("ibg");
var slider_body=document.querySelector(".slider__body");
var slider_row=document.querySelector(".slider__row");
var Next= 0;
var slider= document.getElementsByClassName("row__content");
var sliderBlock_width;
var slider_width;
var header_body=document.querySelector(".header__body");


function FResize(){
    var size= window.innerWidth > 600 ? 3:0.9;
sliderBlock_width= window.innerWidth < 1000 ?document.body.offsetWidth:1000;
console.log(sliderBlock_width);

var sliderBlock_height=sliderBlock_width/size;

slider_body.style=("width:"+sliderBlock_width+"px;height:"+sliderBlock_height+"px;");
for(let i=0 ;ibg.length > i ; i++){

	var srcIbg=ibg[i].getAttribute("src");

slider[i].style=("background-image:url("+srcIbg+");width:"+sliderBlock_width+"px;height:"+sliderBlock_height+"px;");
}
Next=0;
next();
slider_width=(sliderBlock_width*(ibg.length-1))*(-1);
console.log(slider_width);
}

FResize();
window.addEventListener("resize",FResize);

var time=setInterval(cyrcle,3000);
function cyrcle(){
      Next > slider_width ? Next-=sliderBlock_width:Next=0;
 	slider_row.style=("transform:translateX("+Next+"px);");
      time;
}
time;
function next() {
    clearInterval(time); 
      Next > slider_width ? Next-=sliderBlock_width:Next=0;
      slider_row.style=("transform:translateX("+Next+"px);"); 
}
function prev() {
    clearInterval(time); 
    Next < 0 ? Next+=sliderBlock_width:Next=slider_width;
    slider_row.style=("transform:translateX("+Next+"px);");
}



   