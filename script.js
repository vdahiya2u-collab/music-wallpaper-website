document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.music-btn');
    const player = document.getElementById('youtube-audio-player');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            const bgClass = button.getAttribute('data-bg');

            // 1. Wipe out any previously assigned wallpaper classes
            document.body.className = '';

            // 2. Assign the new background class name safely 
            document.body.classList.add(bgClass);

            // 3. Load the corresponding audio track seamlessly
            player.src = `https://youtube.com{videoId}?autoplay=1&enablejsapi=1&origin=${window.location.origin}`;
        });
    });
});
