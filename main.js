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

function eyeball(event) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(function(eye) {
        let headContainer = eye.closest('.head-container');
        if (!headContainer) return;

        let containerRect = headContainer.getBoundingClientRect();

        let containerLeft = containerRect.left;
        let containerTop = containerRect.top;
        let containerWidth = containerRect.width;
        let containerHeight = containerRect.height;

        let eyeWidth = eye.clientWidth;
        let eyeHeight = eye.clientHeight;

        let maxX = containerWidth / 12 - eyeWidth / 2; // limite direito
        let maxY = containerHeight / 26 - eyeHeight / 2; // limite inferior
        let minX = -containerWidth / 24 + eyeWidth / 2; // limite esquerdo
        let minY = -containerHeight / 34 + eyeHeight / 2; // limite superior

        let eyeCenterX = containerLeft + containerWidth / 2;
        let eyeCenterY = containerTop + containerHeight / 2;

        let mouseX = event.pageX;
        let mouseY = event.pageY;

        let relativeX = mouseX - eyeCenterX;
        let relativeY = mouseY - eyeCenterY;


        if (relativeX > maxX) relativeX = maxX;
        if (relativeX < minX) relativeX = minX;
        if (relativeY > maxY) relativeY = maxY;
        if (relativeY < minY) relativeY = minY;

        let radian = Math.atan2(relativeY, relativeX);
        let rotation = radian * (180 / Math.PI);
        rotation *= 0.4;

        eye.style.transform = `translate(${relativeX}px, ${relativeY}px) rotate(${rotation}deg)`;
    });
}

window.addEventListener('mousemove', eyeball);
