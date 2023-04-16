const expectedWidth = window.innerWidth;
const expectedHeight = window.innerHeight;
const item = document.querySelector("#sizeInfo h1");
addEventListener("resize",resize);
function resize(){
		item.innerHTML="Width: "+expectedWidth+" and Height: "+expectedHeight;
};
window.onload = resize;
window.onresize = resize;

