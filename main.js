document.addEventListener('DOMContentLoaded', function() {
    const headContainers = document.querySelectorAll('.head-container');
    const imgContainers = document.querySelectorAll('.img_container');

    function rotateHeads(event) {
        const mouseX = event.clientX;
        const windowCenterX = window.innerWidth / 2;
        const maxRotation = 10; 
        const rotation = (mouseX - windowCenterX) / windowCenterX * maxRotation;

        headContainers.forEach(headContainer => {
            headContainer.style.transform = `rotate(${rotation}deg)`;
        });
    }

    function eyeball(event) {
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(function(eye) {
            const headContainer = eye.closest('.head-container');
            if (!headContainer) return;

            const containerRect = headContainer.getBoundingClientRect();
            const containerCenterX = containerRect.left + containerRect.width / 2;
            const containerCenterY = containerRect.top + containerRect.height / 2;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const deltaX = mouseX - containerCenterX;
            const deltaY = mouseY - containerCenterY;

            const angle = Math.atan2(deltaY, deltaX);

            let distance = Math.min(7, Math.hypot(deltaX, deltaY) / 10);

            if (headContainer.closest('.img_alberto')) {
                distance = Math.min(4, Math.hypot(deltaX, deltaY) / 15);
            }
            else if (headContainer.closest('.img_ricardo')) {
                distance = Math.min(3.5, Math.hypot(deltaX, deltaY) / 15);
            }

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            eye.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    function handleMouseOver(container) {
        const texto1 = container.querySelector('.texto1');
        if (texto1) {
            texto1.style.display = 'block';
        }
    }

    function handleMouseOut(container) {
        const texto1 = container.querySelector('.texto1');
        if (texto1) {
            texto1.style.display = 'none';
        }
    }

    imgContainers.forEach(container => {
        container.addEventListener('mouseover', () => handleMouseOver(container));
        container.addEventListener('mouseout', () => handleMouseOut(container));
    });

    window.addEventListener('mousemove', rotateHeads);
    window.addEventListener('mousemove', eyeball);
});
