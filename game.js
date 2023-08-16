import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.querySelector(".game-board");

function main(currentTime){
	window.requestAnimationFrame(main);
	
	// divide by 1000 to transfer from miliseconds to seconds
	// current time varies every 0.006second but 
	// lastRenderTime changes when secondsSinceLastRender is bigger than 1/snake_speed
	const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
	lastRenderTime = currentTime;
	
	//update function updates the conditions of a snake
	update();
	
	//draw function renders the snake
	draw();
}

window.requestAnimationFrame(main);

function update(){
	updateSnake();
}

function draw(){
	drawSnake(gameBoard);
}