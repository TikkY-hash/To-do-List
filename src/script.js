
const ul = document.querySelector('.work');

document.querySelector('.enter__word').addEventListener('keypress', start);

function start(event) {
  if (event.code === 'Enter') {
    let textUser = this.value;
    test(textUser);
    this.value = "";
  }
}

function test (value) {
  if(value) {
    list(value);
  }
}

function list(value) {
  ul.innerHTML += `
  <li class = "new__block">
       <input type="radio">
       <p class = "new__text">${value}</p> 
       <img class = "delete" src="/dump.d496a47b.png";   
  </li>
  `;

  deleteList ();
  check ();
}

function deleteList () {
    document.querySelectorAll('.delete').forEach(value => 
      value.addEventListener('click',() => {
        value.parentElement.remove();
      }));
}

function check () {
  ul.querySelectorAll('[type="radio"]').forEach(value => {
      value.addEventListener('click',() => {
        value.parentElement.style.backgroundColor = "#A9B2C3";
        value.parentElement.style.opacity = "0.3";
      });
  }); 
}

