document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.music-btn');
    const player = document.getElementById('youtube-audio-player');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            const bgUrl = button.getAttribute('data-bg');

            // Change the page wallpaper
            document.body.style.backgroundImage = `url('${bgUrl}')`;

            // Change the iframe source safely to force autoplay with no restrictions
            player.src = `https://youtube.com{videoId}?autoplay=1&enablejsapi=1&origin=${window.location.origin}`;
        });
    });
});
