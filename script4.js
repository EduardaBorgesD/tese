document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('background-audio');
    const gif1AudioElement = document.getElementById('gif1-audio');
    const gif2AudioElement = document.getElementById('gif2-audio');
    
    const playAudio = () => {
        audioElement.play().catch(() => {
            console.log('Autoplay was prevented, waiting for user interaction');
        });
    };
    
    playAudio();
    
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('scroll', playAudio, { once: true });
    document.addEventListener('keydown', playAudio, { once: true });

    const gifs = document.querySelectorAll('.gif');
    const backgroundContainer = document.getElementById('background');
    const gifContainer = document.getElementById('gifs');

    const gifPositions = {
        gif1: { left: '20px', top: '50px' },
        gif2: { left: '150px', top: '100px' }
    };

    gifs.forEach(gif => {
        gif.addEventListener('dragstart', handleDragStart);
    });

    backgroundContainer.addEventListener('dragover', handleDragOver);
    backgroundContainer.addEventListener('drop', handleDrop);
    gifContainer.addEventListener('dragover', handleDragOver);
    gifContainer.addEventListener('drop', handleReturnDrop);

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        const gif = document.getElementById(id);

        gif.src = gif.getAttribute('data-animated');
        gif.style.position = 'absolute';

        if (gifPositions[id]) {
            gif.style.left = gifPositions[id].left;
            gif.style.top = gifPositions[id].top;
        }

        backgroundContainer.appendChild(gif);

        if (id === 'gif1') {
            gif1AudioElement.play().catch(() => {
                console.log('Failed to play GIF1 audio.');
            });
        } else if (id === 'gif2') {
            gif2AudioElement.play().catch(() => {
                console.log('Failed to play GIF2 audio.');
            });
        }
    }

    function handleReturnDrop(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        const gif = document.getElementById(id);

        gif.src = gif.getAttribute('data-static');
        gif.style.position = 'absolute';

        gifContainer.appendChild(gif);
    }
});
