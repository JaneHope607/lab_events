document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const input = document.querySelector('#title');
  input.addEventListener('input', handleInput);
});

const handleInput = function () {
  const resultParagraph = document.querySelector('#reading-list');
  resultParagraph.textContent = `${event.target.title.value}`;
}
