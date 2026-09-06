document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.music-btn');
    const player = document.getElementById('youtube-audio-player');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            const bgClass = button.getAttribute('data-bg');

            // 1. Swap background classes safely
            document.body.className = '';
            document.body.classList.add(bgClass);

            // 2. Re-instantiate the source target with standard parameters to trigger a fresh network query
            const targetUrl = `https://youtube.com{videoId}?autoplay=1&controls=0&enablejsapi=1`;
            player.src = targetUrl;
        });
    });
});
