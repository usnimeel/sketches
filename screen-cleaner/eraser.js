export class Eraser {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = -speed; // right to left
        this.vy = speed;  // up to down

        this.x = stageWidth;
        this.y = 0;
    }

    draw(ctx) {
        this.x += this.vx;
        this.y += this.vy; 

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}