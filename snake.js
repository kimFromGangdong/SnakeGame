//snake.js contains all of the proporties of the snake

export let SNAKE_SPEED = 2;
const snakeBody = [
	{ x: 10, y: 11 },
	{ x: 11, y: 11 },
	{ x: 12, y: 11 }
];

export function update(){
	// console.log("updateSnake")
}

export function draw(gameBoard){
	snakeBody.forEach(segment=>{
		const snakeElement = document.createElement('div');
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add('snake');
		gameBoard.appendChild(snakeElement);
	})
}