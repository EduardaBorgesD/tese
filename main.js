const headContainers = document.querySelectorAll('.head-container');

function rotateHeads(event) {
    const mouseX = event.clientX;
    const windowCenterX = window.innerWidth / 2;
    const maxRotation = 10; 
    const rotation = (mouseX - windowCenterX) / windowCenterX * maxRotation;

    headContainers.forEach(headContainer => {
        headContainer.style.transform = `rotate(${rotation}deg)`;
    });
}

window.addEventListener('mousemove', rotateHeads);

/* document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const anchor = document.getElementById('anchor');
        if (!anchor) {
            console.error('Anchor element not found');
            return; // Check if anchor is null
        }
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye =>{
            eye.style.transform = `rotate(${10+ angleDeg}deg)`;
        })
    });

    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }
}); */
