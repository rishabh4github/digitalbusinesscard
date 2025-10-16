const card = document.querySelector('.card');

function flip() {
  card.classList.toggle('flipped');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');
  const isFlipped = card.classList.contains('flipped');
  front.setAttribute('aria-hidden', isFlipped ? 'true' : 'false');
  back.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');
}

card.addEventListener('click', flip);
card.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    flip();
  }
});
