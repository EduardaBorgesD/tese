var animationRestarted = false;
var pressStartTime = null;
var pressTimeout = null;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!animationRestarted) {
            document.getElementById('alvaroinicio').style.display = 'none';
            document.getElementById('alvaromeio').style.display = 'block';
            restart();
            animationRestarted = true;
        }

        if (pressStartTime === null) {
            pressStartTime = Date.now();
            pressTimeout = setTimeout(function() {
                showRandomSvg();
            }, 3000);
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        clearTimeout(pressTimeout);
        pressStartTime = null;

        document.getElementById('alvaroinicio').style.display = 'block';
        document.getElementById('alvaromeio').style.display = 'none';
        animationRestarted = false;
    }
});

function restart() {
    var svg = document.getElementById('alvaromeio');
    var newSVG = svg.cloneNode(true);
    svg.parentNode.replaceChild(newSVG, svg);
}

const svgIds = ['alvarobolha', 'alvarobolha2', 'alvarobolha3', 'alvarobolha4', 'alvarobolha5'];

function getRandomSvgId() {
    const randomIndex = Math.floor(Math.random() * svgIds.length);
    return svgIds[randomIndex];
}

function showRandomSvg() {
    const newSvgId = getRandomSvgId();
    const templateSvg = document.getElementById(newSvgId);
    
    const newSvg = templateSvg.cloneNode(true);
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
    var tamVW = Math.random() * 45;
    document.documentElement.style.setProperty('--tam-vw', tamVW + 'vw');
});
