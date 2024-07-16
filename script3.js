var pressStartTime = null;
var pressTimeout = null;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (pressStartTime === null) {
            pressStartTime = Date.now();
            pressTimeout = setTimeout(function() {
                showRandomSvg();
            }, 500);
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        clearTimeout(pressTimeout);
        pressStartTime = null;
    }
});

const svgIds = ['alvarobolha', 'alvarobolha2', 'alvarobolha3', 'alvarobolha4'];

function getRandomSvgId() {
    const randomIndex = Math.floor(Math.random() * svgIds.length);
    return svgIds[randomIndex];
}

function showRandomSvg() {
    const newSvgId = getRandomSvgId();
    const templateSvg = document.getElementById(newSvgId);
    const container = document.getElementById('container');

    const newSvg = templateSvg.cloneNode(true);
    container.style.display = 'block';
    newSvg.style.display = 'block';
    newSvg.style.position = 'absolute';
    newSvg.classList.add('fumodepois');

    var randomLeft = Math.random() * 80;
    var randomWidth = Math.random() * 15 + 7;
    newSvg.style.setProperty('--esq-vw', `${randomLeft}vw`);
    newSvg.style.setProperty('--width-vw', `${randomWidth}vw`);

    document.getElementById('fumo-container').appendChild(newSvg);
}

document.addEventListener('DOMContentLoaded', function() {
    var tamVW = Math.random() * 25;
    document.documentElement.style.setProperty('--tam-vw', tamVW + 'vw');
});

document.querySelectorAll('.element2').forEach(img => {
    img.addEventListener('click', () => {
        img.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    });
});

    const candeeiros = document.querySelectorAll('#candeeiro1, #candeeiro2');

    candeeiros.forEach((candeeiro, index) => {
        candeeiro.addEventListener('click', () => {
            console.log('Candeeiro clicked:', candeeiro);
            const dangleClass = index % 2 === 0 ? 'dangle1' : 'dangle2';
            candeeiro.classList.add(dangleClass);
            
            setTimeout(() => {
                candeeiro.classList.remove(dangleClass);
            }, 1000);
        });
    });

    document.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;

        const angleDeg = (x + y) % 360;
        const elements = document.querySelectorAll('.element1');
        elements.forEach(element => {
            element.style.filter = `hue-rotate(${angleDeg}deg)`;
        });
    });
