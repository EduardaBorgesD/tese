document.addEventListener('DOMContentLoaded', function() {
    const headContainers = document.querySelectorAll('.head-container');

    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
            loader.style.display="none";
    })

    function rotateHeads(event) {
        const mouseX = event.clientX;
        const windowCenterX = window.innerWidth / 2;
        const maxRotation = 3; 
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

    window.addEventListener('mousemove', rotateHeads);
    window.addEventListener('mousemove', eyeball);

    var fernandoImage = document.getElementById("fernando-img");
    var texto1 = document.querySelector(".texto1");
    var albertoImage = document.getElementById("alberto-img");
    var texto2 = document.querySelector(".texto2");
    var alvaroImage = document.getElementById("alvaro-img");
    var texto3 = document.querySelector(".texto3");
    var ricardoImage = document.getElementById("ricardo-img");
    var texto4 = document.querySelector(".texto4");
    
    function addDropAnimation() {
        texto1.classList.add("drop");
        texto2.classList.add("drop");
        texto3.classList.add("drop");
        texto4.classList.add("drop");
    }

    function removeDropAnimation() {
        texto1.classList.remove("drop");
        texto2.classList.remove("drop");
        texto3.classList.remove("drop");
        texto4.classList.remove("drop");
    }
    
    fernandoImage.addEventListener("click", function() {
        window.location.href = "index2.html";
    });
    fernandoImage.addEventListener("mouseenter", function() {
        texto1.style.display = "block";
        document.body.style.backgroundColor = "#FFF6A6";
        setTimeout(addDropAnimation, 10);
    });
    fernandoImage.addEventListener("mouseleave", function() {
        texto1.style.display = "none";
        document.body.style.backgroundColor = "#FFFFFF";
    });
      

    albertoImage.addEventListener("click", function() {
        window.location.href = "index4.html";
    });
    albertoImage.addEventListener("mouseenter", function() {
        texto2.style.display = "block";
        document.body.style.backgroundColor = "#E6FDA5";
    });
    albertoImage.addEventListener("mouseleave", function() {
    texto2.style.display = "none";
    document.body.style.backgroundColor = "#FFFFFF";
    });

      
    alvaroImage.addEventListener("click", function() {
        window.location.href = "index3.html";
    });
    alvaroImage.addEventListener("mouseenter", function() {
        texto3.style.display = "block";
        document.body.style.backgroundColor = "#BDEFFF";
    });
    alvaroImage.addEventListener("mouseleave", function() {
        texto3.style.display = "none";
        document.body.style.backgroundColor = "#FFFFFF";
    });

      
    ricardoImage.addEventListener("click", function() {
        window.location.href = "index1.html";
    });
    ricardoImage.addEventListener("mouseenter", function() {
        texto4.style.display = "block";
        document.body.style.backgroundColor = "#D8C5FF";
    });
    ricardoImage.addEventListener("mouseleave", function() {
        texto4.style.display = "none";
        document.body.style.backgroundColor = "#FFFFFF";
    });
});
