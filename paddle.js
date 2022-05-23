class Paddle{
    x;
    y;
    width;
    height;
    speed;
    constructor(x, y,width,height,speed){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    drawPaddle(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect((canvas.width - this.width)/2,canvas.height-this.height, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }
}