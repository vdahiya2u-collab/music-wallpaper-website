let player;

// 1. Automatically called by the YouTube API script to initialize the player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio-player', {
        height: '0',
        width: '0',
        videoId: '', // Starts empty
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'rel': 0,
	    'origin': 'https://youtube.com'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 2. Once the player framework is ready, attach event listeners to buttons
function onPlayerReady(event) {
    const buttons = document.querySelectorAll('.music-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            const bgUrl = button.getAttribute('data-bg');

            // Change the page wallpaper
            document.body.style.backgroundImage = `url('${bgUrl}')`;

            // Load and play the audio seamlessly
            player.loadVideoById(videoId);
            player.playVideo();
        });
    });
}
