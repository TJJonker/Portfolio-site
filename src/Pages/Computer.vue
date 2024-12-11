<template>
    <div class="container">
        <img src="Images/Monitor.png" alt="Monitor" class="monitor">
        <div class="grid">
            <!-- Grid cells will be populated by JavaScript -->
        </div>
    </div>
    <div
        v-for="(particle, index) in particles"
        :key="index"
        class="particle"
        :style="{
          transform: `translate(${particle.x}px, ${particle.y}px)`,
          background: particle.color,
          opacity: particle.opacity,
          width: `${particle.size}px`,
          height: `${particle.size}px`
        }"
      ></div>
</template>

<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #131314;
        font-family: Arial, sans-serif;
        overflow: hidden; /* Ensures no scrollbars appear */
    }

    .container {
    position: relative;
    width: fit-content;
    height: fit-content;
}

.monitor {
    position: absolute;
    top: 0; /* Position it relative to the container */
    left: 0;
    width: 90px; /* Adjust as per your image size */
    height: 90px; /* Adjust as per your image size */
    z-index: 1;

    /* Disable anti-aliasing */
    image-rendering: pixelated; /* For modern browsers */
    image-rendering: crisp-edges; /* Fallback for some older browsers */
}

.grid {
    position: absolute; /* Match the positioning context of .monitor */
    top: 15px; /* Adjust vertical offset */
    left: 14px; /* Adjust horizontal offset */
    display: grid;
    grid-template-columns: repeat(10, 5px);
    grid-template-rows: repeat(10, 5px);
    gap: 0px;
    z-index: 2;
}

    .pixel {
        width: 5px;
        height: 5px;
        background-color: #1c1c1c;
        position: relative;
    }

    .pixel img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<script>
export default {
    data() {
        return {
            // Monitor Rendering
            urls: [ "Images/Smile.png", "Images/Heart.png", "Images/Fire.png", "Images/Star.png"],
            gridContainer: null,
            gridSize: 10,
            pixelSize: 5,
            image: new Image(),
            highlightColor: '#F97316',
            renderingBackgroundColor: '#1c1c1c',
            pixels: [],
            renderingIndex: 0,
            renderingInterval: 50,

            // Jumping
            jumpDuration: 1000,
            peakJumpHeight: -300,
            particles: [], 
            numOfParticles: 30,
            particleColors: ['#606060'],
        };
    },
    methods: {
        RenderNewImage(url){
            this.renderingIndex = 0;
            this.image = new Image();
            this.image.src = url;
            
            this.image.onload = () => {
                // Prepare the grid cells
                for (let row = 0; row < this.gridSize; row++) {
                    for (let col = 0; col < this.gridSize; col++) {
                        const pixel = document.createElement('div');
                        pixel.classList.add('pixel');
                        pixel.style.backgroundColor = this.highlightColor; // Highlight color

                        // Use canvas to draw a portion of the image (10x10px portion)
                        const canvas = document.createElement('canvas');
                        canvas.width = this.pixelSize;
                        canvas.height = this.pixelSize;

                        const ctx = canvas.getContext('2d');
                        ctx.imageSmoothingEnabled = false;

                        // Crop a 1x1 section of the image and draw it in the grid cell
                        ctx.drawImage(
                            this.image,
                            col, row, // Coordinates to crop from the image
                            1, 1,              // The size of the cropped portion (1x1px from image)
                            0, 0, this.pixelSize, this.pixelSize // Draw the cropped portion at full size (10x10px)
                        );

                        // Convert canvas to image URL and set it as the pixel background
                        const img = document.createElement('img');
                        img.src = canvas.toDataURL(); // Convert canvas to image data URL
                        pixel.appendChild(img);
                        this.pixels.push(pixel); // Store pixel for animation
                    }
                }
                this.RenderPixels();
            }
        },

        RenderPixels(){
            if (this.renderingIndex > 0) {
                // Reset the previously "active" pixel to normal
                this.pixels[this.renderingIndex - 1].style.backgroundColor = this.renderingBackgroundColor;
            }

            if (this.renderingIndex < this.pixels.length) {
                // Highlight the current pixel as "active"
                this.pixels[this.renderingIndex].style.backgroundColor = this.highlightColor;

                // Append the pixel to the grid
                this.gridContainer.appendChild(this.pixels[this.renderingIndex]);

                this.renderingIndex++;
                setTimeout(this.RenderPixels, this.renderingInterval); // Adjust timing for the rendering effect
            }
        },

        jumpTo(targetX, targetY) {
            const startX = this.position.x;
            const startY = this.position.y;
    
            const startTime = performance.now();
    
            const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const t = Math.min(elapsed / this.jumpDuration, 1); // Time normalized between 0 and 1
    
            // Calculate parabolic trajectory
            const newX = startX + t * (targetX - startX);
            const newY =
                startY +
                t * (targetY - startY) +
                this.peakJumpHeight * (4 * t * (1 - t)); // Parabolic arc formula
    
            this.position = { x: newX, y: newY };
    
            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                this.spawnImpactParticles(newX + 20, newY + 10); // Spawn particles when landing
            }
            };
    
            requestAnimationFrame(animate);
        },
    
        spawnImpactParticles(x, y) {
            // Convert -75° to 75° relative to -90° to radians
            const minAngle = (-65 - 90) * (Math.PI / 180); // -75 degrees relative to -90° in radians
            const maxAngle = (65 - 90) * (Math.PI / 180); // 75 degrees relative to -90° in radians
    
            for (let i = 0; i < this.numOfParticles; i++) {
                const angle = Math.random() * (maxAngle - minAngle) + minAngle; // Random angle between -75° and 75° relative to -90°
                const speed = Math.random() * .5 + 0.5; // Random velocity
                const distance = Math.random() * 20 + 10; // Random distance from the impact point
                const color = this.particleColors[Math.floor(Math.random() * this.particleColors.length)];
                const size = Math.random() * 10 + 5; // Random particle size between 5px and 15px
        
                // Calculate initial velocity components (vx, vy)
                const vx = Math.cos(angle) * speed;
                const vy = Math.sin(angle) * speed;
        
                // Create the particle with initial velocity, position, and size
                const particle = {
                    x: x,
                    y: y,
                    vx,
                    vy,
                    color,
                    opacity: 1,
                    size, // Assign random size
                };
        
                this.particles.push(particle);
            }
    
            this.particles = particles;
    
            // Animate the particles
            this.animateParticles();
        },
    
        animateParticles() {
            const updateParticles = () => {
                this.particles = this.particles.filter((particle) => particle.opacity > 0);
        
                this.particles.forEach((particle) => {
                    // Apply velocity and update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
        
                    particle.size -= .1;

                    // Simulate gravity (slow particles down as they move)
                    particle.vy += 0.015; // Gravity effect
        
                    // Fade out particles over time more gradually
                    particle.opacity -= 0.01; // Gradual opacity reduction
        
                    // Remove particles when they are no longer visible
                    if (particle.opacity <= 0) {
                        particle.opacity = 0;
                    }
                });
        
                if (this.particles.length > 0) {
                    requestAnimationFrame(updateParticles);
                }
            };
    
            requestAnimationFrame(updateParticles);
        },
    },
    mounted() {
        this.gridContainer = document.querySelector('.grid')
        this.RenderNewImage(this.urls[0]);
    }
};
</script>