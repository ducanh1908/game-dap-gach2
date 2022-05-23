class Ball {
    x;
    y;
    radius;
    speedX;
    speedY;
    constructor(x,y,radius,speedX, speedY){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY
    }

    drawBall(ctx) {
        ctx.beginPath();
        ctx.fillStyle ="red"
        ctx.arc(this.x, this.y, this.radius,0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    updateBallPosition(){
        this.x +=this.speedX;
        this.y +=this.speedY;
        }
// Xử lý bóng chạm vào khung
    handleBall() {
        if(this.x < this.radius || this.x > canvas.width - this.radius) {
            this.speedX = -this.speedX;
        }
        if(this.y < this.radius||this.y > canvas.height - this.radius) {
            this.speedY = -this.speedY;
        }

    }  
}