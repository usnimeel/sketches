const COLORS = [
    "#006BB0", // Blue
    "#EFA90D", // Yellow
    "#1D1815", // Black
    "#059341", // Green
    "#DC2F1F", // Red
];

export class Circle {
    constructor(i, x, y, radius, speed) {//, directionX, directionY) {
        this.index = i;
        this.radius = radius;
        // directionX ? this.vx = -speed : this.vx = speed;
        // directionY ? this.vy = -speed : this.vy = speed;
        this.vx = speed;
        this.vy = speed;

        this.x = x;
        this.y = y;
    }

    draw(ctx, stageWidth, stageHeight) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = COLORS[this.index];
        ctx.stroke();   
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if(this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if(this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }
}