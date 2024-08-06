document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    const html = document.documentElement;
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    const loader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        console.log("Window fully loaded");
        loader.style.display = 'none';
    });

    const frameCount = 3201;
    const currentFrame = (index) => `images/frames/${index.toString().padStart(5, "0")}.jpg`;

    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
        }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 3660;
    canvas.height = 2100;
    img.onload = function () {
        context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
        img.src = currentFrame(index);
        img.onload = function() {
            context.drawImage(img, 0, 0);
        };
    };

    var setHeight = document.getElementById("set-height");
    var scrollContainer = document.querySelector(".scroll-container");

    const scrollToTopButton = document.getElementById("scrollToTopButton");

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener("scroll", () => {
        const scrollTop = html.scrollTop;
        const maxScrollTop = html.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
            frameCount - 1,
            Math.ceil(scrollFraction * frameCount),
        );

        requestAnimationFrame(() => updateImage(frameIndex + 1));

        if (frameIndex + 1 === frameCount) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    preloadImages();
});
