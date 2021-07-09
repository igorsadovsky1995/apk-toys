document.addEventListener('click',clck);
function clck (a){
	
	var header__Link=document.querySelector(".header__link")
	var click=a.target.classList;
	if(click == "header__search-button-img"){
		var block =document.querySelector(".nav__form")
        block.classList.toggle("active");
        
	}
	console.log(click);
     if(click =="header__link bottom" || click =="header__link bottom active"){
        
     	click.toggle("active");
     }
      }
	function burger(){
		var header__nav=document.getElementsByClassName("header__nav");
    header__nav[0].classList.toggle("active");
}

