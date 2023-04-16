
const item = document.getElementById("sizeInfo");
window.onload = function(){
		item.innerHTML="Width: "+screen.width+" and Height: "+screen.height;
	};
window.onresize = function(){
		item.innerHTML="Width: "+screen.width+" and Height: "+screen.height;
	};