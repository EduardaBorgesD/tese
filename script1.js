document.addEventListener('DOMContentLoaded', function() {
    var vid = document.getElementById('v0');
    var playbackConst = 1800;
    var setHeight = document.getElementById("set-height");
    var scrollContainer = document.querySelector('.scroll');

    vid.addEventListener('loadedmetadata', function() {
        setHeight.style.height = (vid.duration * playbackConst) + "px";
    });

    function updateVideo() {
        var scrollPosition = document.documentElement.scrollTop;
        vid.currentTime = scrollPosition / playbackConst;
    }

    window.addEventListener('scroll', function() {
        requestAnimationFrame(updateVideo);
    });
});
