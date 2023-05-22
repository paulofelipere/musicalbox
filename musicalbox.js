const doc = document
const playlist = doc.querySelector('#playlist');
const links = playlist.querySelectorAll('a');
const audio = doc.querySelector('audio');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    audio.src = this.dataset.src;
    audio.play();
  });
});
