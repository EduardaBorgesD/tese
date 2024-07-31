    document.addEventListener("DOMContentLoaded", function () {
        const html = document.documentElement;
        const canvas = document.querySelector("canvas");
        const context = canvas.getContext("2d");
        const loader = document.getElementById('preloader');
        window.addEventListener('load', function() {
            loader.style.display = 'none';
        });
        var playbackConst = 1500;
        const frameCount = 3192;
        const currentFrame = (index) =>
          `images/frames/${index.toString().padStart(5, "0")}.jpg`;
      
        const preloadImages = () => {
          for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
          }
        };
      
        const img = new Image();
        img.src = currentFrame(1);
        canvas.width = 1920;
        canvas.height = 1080;
        img.onload = function () {
          context.drawImage(img, 0, 0);
        };
      
        const updateImage = (index) => {
          img.src = currentFrame(index);
          context.drawImage(img, 0, 0);
        };
      
        var setHeight = document.getElementById("set-height");
        var scrollContainer = document.querySelector(".scroll");
      
        window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop;
          const maxScrollTop = html.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;
          const frameIndex = Math.min(
            frameCount - 1,
            Math.ceil(scrollFraction * frameCount),
          );
      
          requestAnimationFrame(() => updateImage(frameIndex + 1));
        });
      
        preloadImages();
      });
      