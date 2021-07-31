import { Rings } from './rings.js';

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
        this.gapX = 220;
        this.gapY = 100;

        this.rings = new Rings(
            this.centerX,
            this.centerY - 50,
            this.radius,
            this.gapX,
            this.gapY
        );

        requestAnimationFrame(this.animate.bind(this));

        this.canvas.addEventListener('mousemove', e => {
                console.log('moving');
        });
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
        this.rings.draw(this.ctx, this.stageWidth, this.stageHeight);
    }
}

window.onload = () => {
    new App();
}