document.addEventListener('DOMContentLoaded', () => {
    const sheep = document.getElementById('sheep');
    const gifSheep = document.getElementById('ap_sheep');
    const imgSheep = document.getElementById('i_sheep');
    let sheepTimer;
    let sheepsClicked = 0;
    const totalSheep = 15;
    const gameContainer = document.querySelector('.container-sheep');
    const video = document.querySelector(".ac1");
    const video2 = document.querySelector(".ac2");
    const gamedisplay = document.getElementById("gamedisplay");

    setTimeout(() => {
        video2.style.display = 'block';
        video.style.display = 'none';
    }, 4000);

    setTimeout(() => {
        if (video2.style.display === "block") {
            gamedisplay.style.display = 'block';
            moveSheep();
        }
    }, 4000); 

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

        gifSheep.style.display = 'block';
        imgSheep.style.display = 'none';

        setTimeout(() => {
            gifSheep.style.display = 'none';
            imgSheep.style.display = 'block';
        }, 1000);
    }

    sheep.addEventListener('mousedown', () => {
        sheep.style.display = 'none';
        sheepsClicked++;

        const opacity = sheepsClicked / totalSheep;
        gameContainer.classList.add('faded');
        setTimeout(() => {
            gameContainer.style.background = `linear-gradient(rgba(255,255,255,${1 - opacity}), rgba(255,255,255,${1 - opacity})), url('images/campo.jpg') no-repeat center center`;
            gameContainer.style.backgroundSize = 'cover';
        }, 50);
    });

    function moveSheep() {
        const inc_timer=500;
        sheepsClicked = 0;
        sheepTimer = setInterval(randomPosition, 4000-inc_timer);
    }
});
