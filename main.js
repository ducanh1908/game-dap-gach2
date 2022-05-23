let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let rightPress = false;
let leftPress = false;
canvas.width = 800;
canvas.height = 600;

let ball = new Ball(400,580,10,3,2);
let paddle = new Paddle(800,600,100,20,30);

paddle.drawPaddle(ctx);

ball.drawBall(ctx);

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall(ctx);
    ball.updateBallPosition();  
    ball.handleBall(); 
    paddle.drawPaddle(ctx);
}

function moveBall() {
    update(); 
    requestAnimationFrame(moveBall);
}
moveBall();
function movePaddle(event) {
    switch(event.keyCode) {
        case 39:
            moveRight();
            break;
        case 37:
            moveLeft();
            break;
    }
    update();
}

// document.addEventListener("keydown", function(event){
//     if(event.keyCode == 39){
//         rightPress = true;
//     }
//     else if(event.keyCode == 37) {
      
//         leftPress = true;
//     }
// })
// document.addEventListener("keyup", function(event){
//     if(event.keyCode == 39){
//         rightPress = false;
//     }
//     else if(event.keyCode == 37) {
//         leftPress = false;
//     }
// });
// function movePaddle() {
//     if(rightPress) {
//         paddle.moveRight();
//     }
//     else if(leftPress){
//         paddle.moveLeft();
//     }
// }

