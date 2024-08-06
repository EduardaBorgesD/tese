document.addEventListener('DOMContentLoaded', () => {
    const lottiePlayers = document.querySelectorAll('.lottie1, .lottie2, .lottie3, .lottie4, .lottie5, .lottie6, .lottie7, .lottie8, .lottie9, .lottie10, .lottie11, .lottie12, .lottie13, .lottie14, .lottie15, .lottie16, .lottie17, .lottie18, .lottie19, .lottie20, .lottie21, .lottie22, .lottie23, .lottie24, .lottie25, .lottie26, .lottie27, .lottie28, .lottie29, .lottie30');
    const texto2 = document.querySelector('.texto2');
    const texto3 = document.querySelector('.texto3');
    const texto4 = document.querySelector('.texto4');
    const texto5 = document.querySelector('.texto5');
    const texto6 = document.querySelector('.texto6');
    const loader = document.getElementById('preloader');

    window.addEventListener('load', function() {
        loader.style.display = 'none';
    });

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

        lottiePlayers.forEach(player => {
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

    lottiePlayers.forEach(player => {
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


    lottiePlayers.forEach((player) => {
        player.addEventListener('click', () => {
            player.classList.toggle('color-change');
        });
    });
});
