let lastRenderTime = 0;
let SNAKE_SPEED = 2;

function main(currentTime){
	window.requestAnimationFrame(main);
	// divide by 1000 to transfer from miliseconds to seconds
	// current time varies every 0.006second but 
	// lastRenderTime changes when secondsSinceLastRender is bigger than 1/snake_speed
	const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
	console.log("render");
	lastRenderTime = currentTime;
}

window.requestAnimationFrame(main);