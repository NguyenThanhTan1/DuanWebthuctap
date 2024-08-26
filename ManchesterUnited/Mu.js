document.querySelector('.table-player').addEventListener('scroll', function() {
    const hiddenPlayers = document.querySelectorAll('.player.hidden');
    hiddenPlayers.forEach(player => {
        if (player.getBoundingClientRect().top < window.innerHeight) {
            player.classList.remove('hidden');
        }
    });
});