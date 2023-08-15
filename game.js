let lastRenderTime = 0;

function main(currentTime){
	//divide by 1000 to transfer from miliseconds to seconds
	const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
	lastRenderTime = currentTime;
	window.requestAnimationFrame(main);
	console.log(secondsSinceLastRender);
}

window.requestAnimationFrame(main);