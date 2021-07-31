const COLORS = [
    "#006BB0", // Blue
    "#EFA90D", // Yellow
    "#1D1815", // Black
    "#059341", // Green
    "#DC2F1F", // Red
];

export class Rings {
    constructor(x, y, radius, gapX, gapY) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.gapX = gapX;
        this.gapY = gapY;
    }

    draw(ctx, stageWidth, stageHeight) {
        // Draw the top of the yellow and green circles.
        ctx.beginPath();
        ctx.arc(this.x - this.gapX / 2, this.y + this.gapY, this.radius, Math.PI, 0);
        ctx.lineWidth = 15;
        ctx.strokeStyle = COLORS[1];
        ctx.stroke();   
        ctx.beginPath();
        ctx.arc(this.x + this.gapX / 2, this.y + this.gapY, this.radius, Math.PI, 0);
        ctx.lineWidth = 15;
        ctx.strokeStyle = COLORS[3];
        ctx.stroke();  

        // Draw three circles on top
        for(let i = 0; i < 5; i++) {
            let x, y;
            if(i % 2 == 0) {
                y = this.y + 10;
                if(i == 2) {
                    x = this.x;
                } else {
                    i < 2 ? x = this.x - this.gapX : x = this.x + this.gapX;
                }
            } 
            ctx.beginPath();
            ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
            ctx.lineWidth = 15;
            ctx.strokeStyle = COLORS[i];
            ctx.stroke();   
        }

        // Draw the bottom of the yellow and green circles.
        ctx.beginPath();
        ctx.arc(this.x - this.gapX / 2, this.y + this.gapY, this.radius, 0, Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = COLORS[1];
        ctx.stroke();   
        ctx.beginPath();
        ctx.arc(this.x + this.gapX / 2, this.y + this.gapY, this.radius, 0, Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = COLORS[3];
        ctx.stroke();  
    }
}