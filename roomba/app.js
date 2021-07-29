import { Roomba } from './roomba.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        
        this.roomba = new Roomba(this.stageWidth, this.stageHeight, 60, 15);

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

        this.roomba.draw(this.ctx, this.stageWidth, this.stageHeight);
    }
}

window.onload = () => {
    new App();
}