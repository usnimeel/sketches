import { Circle } from './circle.js';

const circles = []

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.centerX = this.stageWidth / 2;
        this.centerY = this.stageHeight / 2;
        this.radius = 100;
        this.gapX = 240;
        this.gapY = 100;

        for(let i = 0; i < 5; i++) {
            let x, y;
            if(i % 2 == 0) {
                y = this.centerY;
                if(i == 2) {
                    x = this.centerX;
                } else {
                    i < 2 ? x = this.centerX - this.gapX : x = this.centerX + this.gapX;
                }
            } else {
                y = this.centerY + this.gapY;
                i < 2 ? x = this.centerX - this.gapX / 2 : x = this.centerX + this.gapX / 2;
            } 

            circles[i] = new Circle(i, x, y, this.radius, 10)
                // Math.floor(Math.random() * 2), Math.floor(Math.random() * 2));
        }

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); 

        for(let i = 0; i < circles.length; i++) {
            circles[i].draw(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

window.onload = () => {
    new App();
}