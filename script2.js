document.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('.lottie-player');
    const texto2 = document.querySelector('.texto2');
    const texto3 = document.querySelector('.texto3');
    const texto4 = document.querySelector('.texto4');
    const texto5 = document.querySelector('.texto5');
    const texto6 = document.querySelector('.texto6');

  

    let selectionBox = null;

    const createSelectionBox = () => {
        const box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.border = '2px dashed blue';
        box.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
        box.style.pointerEvents = 'none';
        document.body.appendChild(box);
        return box;
    };

    const updateSelectionBox = (startX, startY, endX, endY) => {
        const left = Math.min(startX, endX);
        const top = Math.min(startY, endY);
        const width = Math.abs(endX - startX);
        const height = Math.abs(endY - startY);

        selectionBox.style.left = `${left}px`;
        selectionBox.style.top = `${top}px`;
        selectionBox.style.width = `${width}px`;
        selectionBox.style.height = `${height}px`;
    };

    const checkIfSelectionCoversAllLottie = () => {
        const boxRect = selectionBox.getBoundingClientRect();
        let allLottieCovered = true;

        players.forEach(player => {
            const playerRect = player.getBoundingClientRect();
            if (!(boxRect.left <= playerRect.right &&
                boxRect.right >= playerRect.left &&
                boxRect.top <= playerRect.bottom &&
                boxRect.bottom >= playerRect.top)) {
                allLottieCovered = false;
            }
        });

        if (allLottieCovered) {
            texto2.style.display = 'none';
            texto3.style.display = 'none';
            texto4.style.display = 'none';
            texto5.style.display = 'none';
            texto6.style.display = 'block';
        } else {
            texto6.style.display = 'none';
        }
    };

    document.addEventListener('mousedown', (e) => {
        selectionBox = createSelectionBox();
        selectionBox.style.left = `${e.pageX}px`;
        selectionBox.style.top = `${e.pageY}px`;
        selectionBox.style.width = '0px';
        selectionBox.style.height = '0px';
    });

    document.addEventListener('mousemove', (e) => {
        if (selectionBox) {
            updateSelectionBox(selectionBox.offsetLeft, selectionBox.offsetTop, e.pageX, e.pageY);
        }
    });

    document.addEventListener('mouseup', () => {
        if (selectionBox) {
            checkIfSelectionCoversAllLottie();
            document.body.removeChild(selectionBox);
            selectionBox = null;
        }
    });

    players.forEach(player => {
        let isPlaying = false;

        player.addEventListener('mouseenter', () => {
            if (!isPlaying) {
                player.play();
                isPlaying = true;
            }
        });

        player.addEventListener('mouseleave', () => {
            player.stop();
            isPlaying = false;
        });
    });

    const pessoa1 = document.getElementById('pessoa1');
    const pessoa2 = document.getElementById('pessoa2');
    const pessoa3 = document.getElementById('pessoa3');
    const pessoa4 = document.getElementById('pessoa4');

    pessoa1.addEventListener('mousedown', () => {
        texto2.style.display = 'none';
        texto4.style.display = 'none';
        texto3.style.display = 'none';
        texto5.style.display = 'none';
        texto6.style.display = 'block';
    });

    pessoa2.addEventListener('mousedown', () => {
        texto2.style.display = 'none';
        texto4.style.display = 'block';
        texto3.style.display = 'none';
        texto5.style.display = 'none';
    });

    pessoa3.addEventListener('mousedown', () => {
        texto2.style.display = 'none';
        texto4.style.display = 'none';
        texto5.style.display = 'none';
        texto3.style.display = 'block';
    });

    pessoa4.addEventListener('mousedown', () => {
        texto2.style.display = 'none';
        texto5.style.display = 'block';
        texto3.style.display = 'none';
        texto4.style.display = 'none';
    });
});
