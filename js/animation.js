var anim=document.getElementsByClassName("anim");
function bounding(index){
	var margin=anim[index].clientHeight / 100 * 25;
   var posAnim=anim[index].getBoundingClientRect();
		return {top: (posAnim.top+window.scrollY+margin)};
}
function scroll(){
	var s=self.pageYoffset || 
	(document.documentElement && document.documentElement.scrollTop) 
	|| (document.body && document.body.scrollTop);
    return s+window.innerHeight;
}
document.addEventListener("scroll",scrl);
var step=0;
function scrl(){
	var animOn=document.getElementsByClassName("animOn");
	if(anim.length> animOn.length ){
for(var i = 0; anim.length-1 >= i ; i++){
	if(bounding(i).top < scroll() ){
		anim[i].classList.add("animOn");
		console.log(i);
	}
}
}
}
scrl();