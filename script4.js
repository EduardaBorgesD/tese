document.addEventListener('DOMContentLoaded', () => {
    const sheep = document.getElementById('sheep');
    let sheepTimer;
    let sheepsClicked = 0;
    const totalSheep = 15;
    const gameContainer = document.querySelector('.container-sheep');
    const video = document.querySelector("#in-video video");
    const gamedisplay = document.getElementById("gamedisplay");

    if (video) {
        video.addEventListener('ended', () => {
            gamedisplay.style.display = 'block';
            video.style.display = 'none';
            moveSheep();
        });
    }

    function randomPosition() {
        const containerWidth = gameContainer.clientWidth;
        const containerHeight = gameContainer.clientHeight;
        const sheepWidth = sheep.clientWidth;
        const sheepHeight = sheep.clientHeight;

        const randomX = Math.floor(Math.random() * (containerWidth - sheepWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - sheepHeight));

        sheep.style.left = `${randomX}px`;
        sheep.style.top = `${randomY}px`;
        sheep.style.display = 'block';
    }

    sheep.addEventListener('mousedown', () => {
        sheep.style.display = 'none';
        sheepsClicked++;

        if (sheepsClicked >= totalSheep) {
            gameContainer.classList.add('faded');
        }
    });

    function moveSheep() {
        sheepTimer = setInterval(randomPosition, 2000);
    }
});
