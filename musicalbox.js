
const links = document.querySelectorAll('#playlist a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    audio.src = this.dataset.src;
    audio.play();
  });
});
