const audio = document.getElementById('audio');
const links = document.querySelectorAll('#playlist a');
const numLinks = links.length;

for (let i = 0; i < numLinks; i++) {
  const link = links[i];
  link.addEventListener('click', function(e) {
    e.preventDefault();
    audio.src = this.dataset.src;
    audio.play();
  });
}
