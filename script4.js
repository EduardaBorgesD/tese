document.addEventListener('DOMContentLoaded', () => {
    let sheepsClicked = 0;
    let totalSheep = 15;
    const gameContainer = document.querySelector('.container-sheep');
    const video = document.querySelector(".ac1");
    const video2 = document.querySelector(".ac2");
    const video3 = document.querySelector(".ac3");
    const gamedisplay = document.getElementById("gamedisplay");
    let Interval = 3500;
    const finalSheep = 30;
    const alberto = document.querySelector('.pc_alberto');
    const minSpacing = 100; 

    setTimeout(() => {
        video2.style.display = 'block';
        video.style.display = 'none';
    }, 4000);

    setTimeout(() => {
        if (video2.style.display === "block") {
            gamedisplay.style.display = 'block';
            initializeSheep();
        }
    }, 4000);

    function createSheep() {
        const sheep = document.createElement('div');
        sheep.classList.add('sheep');

        const gifSheep = document.createElement('img');
        gifSheep.src = 'images/sheep_appear.gif';
        gifSheep.alt = 'Pop up Ovelha';
        gifSheep.classList.add('g_sheep');
        gifSheep.style.position = 'absolute';

        const imgSheep = document.createElement('img');
        imgSheep.src = 'images/sheep1.GIF';
        imgSheep.alt = 'Ovelha';
        imgSheep.classList.add('i_sheep');
        imgSheep.style.position = 'absolute';
        imgSheep.style.display = 'none';

        sheep.appendChild(gifSheep);
        sheep.appendChild(imgSheep);

        gameContainer.appendChild(sheep);

        sheep.addEventListener('mousedown', () => {
            console.log('Sheep clicked!');
            sheep.remove(); 
            sheepsClicked++;
            totalSheep = Math.max(4, totalSheep - 1);
            console.log('Total sheep:', totalSheep);

            if (sheepsClicked >= finalSheep) {
                removeAllSheep();
            } else {
                initializeSheep();
            }

            const opacity = sheepsClicked / finalSheep;
            gameContainer.classList.add('faded');
            setTimeout(() => {
                gameContainer.style.background = `linear-gradient(rgba(255,255,255,${1 - opacity}), rgba(255,255,255,${1 - opacity})), url('images/campo.jpg') no-repeat center center`;
                gameContainer.style.backgroundSize = 'cover';
            }, 50);
        });

        return { sheep, gifSheep, imgSheep };
    }

    function randomPosition(sheepElement) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const sheepWidth = sheepElement.clientWidth;
        const sheepHeight = sheepElement.clientHeight;

        const marginX = windowWidth / 5;
        const marginY = windowHeight / 5;

        const albertoRect = alberto.getBoundingClientRect();
        const existingSheep = Array.from(document.querySelectorAll('.sheep')).filter(sheep => sheep !== sheepElement);

        let randomX, randomY, validPosition;
        do {
            randomX = Math.floor(Math.random() * (windowWidth - 2 * marginX - sheepWidth)) + marginX;
            randomY = Math.floor(Math.random() * (windowHeight - 2 * marginY - sheepHeight)) + marginY;
            validPosition = existingSheep.every(sheep => {
                const rect = sheep.getBoundingClientRect();
                return Math.abs(randomX - rect.left) > sheepWidth + minSpacing || Math.abs(randomY - rect.top) > sheepHeight + minSpacing;
            });
        } while (
            !validPosition ||
            (randomX < albertoRect.right && randomX + sheepWidth > albertoRect.left &&
            randomY < albertoRect.bottom && randomY + sheepHeight > albertoRect.top)
        );

        sheepElement.style.left = `${randomX}px`;
        sheepElement.style.top = `${randomY}px`;
        sheepElement.style.display = 'block';

        const gifSheep = sheepElement.querySelector('.g_sheep');
        const imgSheep = sheepElement.querySelector('.i_sheep');

        gifSheep.style.left = `0px`;
        gifSheep.style.top = `0px`;
        gifSheep.style.display = 'block';
        gifSheep.src = gifSheep.src;

        imgSheep.style.left = `0px`;
        imgSheep.style.top = `0px`;
        imgSheep.style.display = 'none';

        setTimeout(() => {
            gifSheep.style.display = 'none';
            imgSheep.style.display = 'block';
            imgSheep.classList.add('animate-sheep');
        }, 1000);
    }

    function moveSheep(sheepElement) {
        randomPosition(sheepElement);
        setInterval(() => randomPosition(sheepElement), Interval);
    }

    function initializeSheep() {
        const existingSheep = document.querySelectorAll('.sheep');
        existingSheep.forEach(sheep => sheep.remove());

        for (let i = 0; i < totalSheep; i++) {
            const { sheep } = createSheep();
            console.log('Sheep created:', sheep);
            moveSheep(sheep);
        }
    }

    function removeAllSheep() {
        const sheeps = document.querySelectorAll('.sheep');
        sheeps.forEach(sheep => sheep.remove());
        setTimeout(() => {
            video3.style.display = 'block';
            video2.style.display = 'none';
        }, 500);
    }
});
