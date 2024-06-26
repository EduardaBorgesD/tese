document.addEventListener('DOMContentLoaded', () => {
    const sheep = document.getElementById('sheep');
    let sheepTimer;

    const video = document.querySelector("#in-video video");
    const gamedisplay = document.getElementById("gamedisplay");

    if (video) {
        video.addEventListener('ended', () => {
            gamedisplay.style.display = 'block';
            video.style.display= 'none';
            moveSheep();
        });
    }

  function randomPosition() {
        const gameContainer = document.querySelector('.container-sheep');
        const containerWidth = gameContainer.clientWidth;
        const containerHeight = gameContainer.clientHeight;

        const randomX = Math.floor(Math.random() * (containerWidth - sheep.offsetWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - sheep.offsetHeight));

        sheep.style.left = `${randomX}px`;
        sheep.style.top = `${randomY}px`;
        sheep.style.display = 'block';
    }

    sheep.addEventListener('mousedown', () => {
        sheep.style.display = 'none';
    });

    function moveSheep() {
        sheepTimer = setInterval(randomPosition, 2000);
    }
});