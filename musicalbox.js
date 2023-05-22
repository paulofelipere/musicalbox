function setupPlaylist(links) {
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      audio.src = this.dataset.src;
      audio.play();
    });
  });
}

const playlistLinks = Array.from(document.querySelectorAll('#playlist a'));
setupPlaylist(playlistLinks);
