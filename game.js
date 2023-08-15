function main(currentTime){
	console.log(currentTime);
	window.requestAnimationFrame(main);
}
window.requestAnimationFrame(main);