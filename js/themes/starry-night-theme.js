class StarryNightTheme extends BackgroundTheme {
    initialize() {
        // console.log('starrynight initialize');
        // Initialize stars array and other properties specific to the StarryNightTheme
        this.stars = [];
        for (let i = 0; i < 1000; i++) {
            this.stars.push(new Star(this.canvas.width, this.canvas.height));
        }
    }

    update() {
        // console.log('starrynight update');
        // Update the stars
        for (let star of this.stars) {
            star.update();
        }
    }

    draw() {
        // console.log('starrynight draw');
        // Draw the stars
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let star of this.stars) {
            star.draw(this.ctx);
        }
    }
    start() {
        this.update();
        this.draw();
        requestAnimationFrame(this.start.bind(this));
    }
}

// Star class used by StarryNightTheme
class Star {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.2;
    }

    update() {
        this.x += this.speed;
        if (this.x > this.canvasWidth + this.size * 2) {
            this.x = -2 * this.size;
            this.y = Math.random() * this.canvasHeight;
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}