class MulticoloredStarsTheme extends BackgroundTheme {
    initialize() {
        // Initialize stars array and other properties specific to the MulticoloredStarsTheme
        // console.log('mcs draw');
        this.stars = [];
        for (let i = 0; i < 1000; i++) {
            this.stars.push(new MulticoloredStar(this.canvas.width, this.canvas.height));
        }
    }

    update() {
        // console.log('mcs update');
        // Update the stars
        for (let star of this.stars) {
            star.update();
        }
    }

    draw() {
        // console.log('mcs draw');
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

// MulticoloredStar class used by MulticoloredStarsTheme
class MulticoloredStar extends Star {
    constructor(canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}