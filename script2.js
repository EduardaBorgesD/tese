document.addEventListener('DOMContentLoaded', (event) => {
    const players = document.querySelectorAll('.lottie-player');
    const pessoa1 = document.getElementById('pessoa1');
    const pessoa2 = document.getElementById('pessoa2');
    const pessoa3 = document.getElementById('pessoa3');
    const pessoa4 = document.getElementById('pessoa4');
    const texto2 = document.querySelector('.texto2');
    const texto3 = document.querySelector('.texto3');
    const texto4 = document.querySelector('.texto4');
    const texto5 = document.querySelector('.texto5');
    const texto6 = document.querySelector('.texto6');


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

    pessoa1.addEventListener('mousedown', () => {
        texto2.style.display = 'none';
        texto4.style.display = 'none';
        texto3.style.display="none";
        texto5.style.display="none";
        texto6.style.display="block";
    });

    pessoa2.addEventListener('mousedown', () => {
        texto2.style.display = 'none';
        texto4.style.display = 'block';
        texto3.style.display="none";
        texto5.style.display="none";
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
        texto3.style.display="none";
        texto4.style.display="none";
    });
});
