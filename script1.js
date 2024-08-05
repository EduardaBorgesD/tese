document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  const loader = document.getElementById('preloader');
  window.addEventListener('load', function() {
      loader.style.display = 'none';
  });

  const frameCount = 3201;
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
  canvas.width = 3660;
  canvas.height = 2100;
  img.onload = function () {
      context.drawImage(img, 0, 0);
  };

  const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
  };

  var setHeight = document.getElementById("set-height");
  var scrollContainer = document.querySelector(".scroll-container");

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
