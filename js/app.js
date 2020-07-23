document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit); //one event listener for the form submit
});

// this 
const handleFormSubmit = function(event) {
  event.preventDefault(); //stops page refresh

  const readingList = document.querySelector('#reading-list'); 
  const newItem = document.createElement('li'); //creates new li element 
  newItem.textContent = `${event.target.title.value}, ${event.target.author.value},
  ${event.target.category.value}`;
  
  //gives it a class of item
  newItem.classList.add('item'); 
  

  readingList.appendChild(newItem);

  //resets after each submission
  document.getElementById('new-item-form').reset();
}


