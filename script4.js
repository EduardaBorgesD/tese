document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const background = document.getElementById('background-image');
    const backgroundAudio = document.getElementById('background-audio');

    if (backgroundAudio) {
        backgroundAudio.loop = true;
        backgroundAudio.volume = 0.2;
        backgroundAudio.play();
    }

    let currentAudio = null;
    const positionedGifs = new Set();

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    background.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    background.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const droppedImage = document.getElementById(id);

        if (!droppedImage) {
            return;
        }

        const rect = background.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const gifMapping = {
            'png1': 'floresG.gif',
            'png2': 'rioG.gif',
            'png3': 'sheepG.gif',
            'png4': 'nuvem.gif',
            'png5': 'aldeia.gif',
            'png6': 'sol.gif'
        };

        const audioMapping = {
            'floresG.gif': 'gif-flores-audio',
            'rioG.gif': 'gif-rio-audio',
            'sheepG.gif': 'gif-ovelha-audio',
            'aldeia.gif': 'gif-lapide-audio',
            'nuvem.gif': 'gif-nuvem-audio',
            'sol.gif': 'gif-sol-audio'
        };

        const newGif = gifMapping[id];
        if (newGif) {
            if (positionedGifs.has(newGif)) {
                if (newGif === 'rioG.gif') {
                    droppedImage.style.left = '100px';
                    droppedImage.style.top = '200px';
                } else {
                    droppedImage.style.left = `${x - (droppedImage.width / 2)}px`;
                    droppedImage.style.top = `${y - (droppedImage.height / 2)}px`;
                }
                return;
            }

            droppedImage.src = `images/Alberto/${newGif}`;

            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            const newAudioId = audioMapping[newGif];
            if (newAudioId) {
                currentAudio = document.getElementById(newAudioId);
                if (currentAudio) {
                    currentAudio.load();
                    currentAudio.play();
                }
            }

            if (newGif === 'sheepG.gif') {
                droppedImage.classList.add('sheep-gif');
            } else if (newGif === 'floresG.gif'){
                droppedImage.classList.add('flores-gif');
            } else if (newGif === 'rioG.gif'){
                droppedImage.classList.add('rio-gif');
            } else if (newGif === 'nuvem.gif'){
                droppedImage.classList.add('nuvem-gif');}else{
                droppedImage.classList.add('draggable1');
            }

            droppedImage.style.position = 'absolute';
            if (newGif === 'rioG.gif') {
                droppedImage.style.left = '42vw';
                droppedImage.style.top = '8.7vw';
            } else if (newGif === 'nuvem.gif') {
                    droppedImage.style.left = '0vw';
                    droppedImage.style.top = '-2vw';
                    droppedImage.style.position = 'fixed';
                    droppedImage.draggable = false;
            }

                else if (newGif === 'sol.gif'){
                droppedImage.style.left = `${x - (droppedImage.width / 2)}px`;
                const sky = Math.max(0, Math.min(10, y - (droppedImage.height / 2) * 100 / window.innerHeight)) + 'vw';
                droppedImage.style.top = sky;
            } else {
                droppedImage.style.left = `${x - (droppedImage.width / 2)}px`;
                droppedImage.style.top = `${y - (droppedImage.height / 2)}px`;
            }

            positionedGifs.add(newGif);

            droppedImage.parentNode.removeChild(droppedImage);
            
            background.appendChild(droppedImage);
        }
    });
});
