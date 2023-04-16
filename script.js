const expectedWidth = window.innerWidth;
const expectedHeight = window.innerHeight;
const item = document.querySelector("#sizeInfo h1");
window.onload = function(){
		item.innerHTML="Width: "+expectedWidth+" and Height: "+expectedHeight;
	};
window.onresize = function(){
		item.innerHTML="Width: "+expectedWidth+" and Height: "+expectedHeight;
	};