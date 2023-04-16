const expectedWidth = window.innerWidth;
const expectedHeight = window.innerHeight;
const item = document.querySelector("#sizeInfo h1");
window.onload = new ResizeObserver(() => {
		item.innerHTML="Width: "+expectedWidth+" and Height: "+expectedHeight;
	})
let resizeObserver = new ResizeObserver(() => {
		item.innerHTML="Width: "+expectedWidth+" and Height: "+expectedHeight;
	})
resizeObserver.observe(document.getElementsByTagName("body")[0]);
