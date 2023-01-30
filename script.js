const btn = document.querySelector('#btn');


//ADD INPUT WITH BTN and remove



btn.addEventListener('click', () => {
    const input = document.querySelector('#input-text').value;
    const ul = document.querySelector('#ul')
    const li = document.createElement('li')
    li.innerHTML = `<div class="input-value">${input}</div> <div class="div-img"><img id="close-white" src="close-white.svg" alt="close"></div>`
    ul.appendChild(li)
  
    //Add event listener to close button
    li.querySelector('.div-img img').addEventListener('click', (e) => {
      e.target.parentNode.parentNode.remove();
    });
  });


//ADD INPUT WITH ENTER KEY and Remove

  document.querySelector('#input-text').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      const input = document.querySelector('#input-text').value;
      const ul = document.querySelector('#ul')
      const li = document.createElement('li')
      li.innerHTML = `<li>${input}</li><img id="close-white" src="close-white.svg" alt="close">`
      ul.appendChild(li)
      console.log(ul)
      //Add event listener to close button
      li.querySelector('img').addEventListener('click', (e) => {
        e.target.parentNode.remove();
      });
    }
  });

//CLEAR INPUT TEXT
  const mainClose = document.querySelector(".menu-section #close-white")
  mainClose.addEventListener('click', () => {
  const input = document.querySelector('#input-text').value = '';
})




// Sort Func
let sortOrder = 'asc';

function sortList() {
  var list = document.getElementById("ul");
  var items = list.getElementsByTagName("li");
  var itemsArr = [];
  for (var i = 0; i < items.length; i++) {
    itemsArr.push(items[i].innerHTML);
  }
  if (sortOrder === 'asc') {
    itemsArr.sort();
    sortOrder = 'desc';
  } else {
    itemsArr.sort().reverse();
    sortOrder = 'asc';
  }
  for (i = 0; i < items.length; i++) {
    items[i].innerHTML = itemsArr[i];
  }
}

document.getElementById("test-button").addEventListener("click", sortList);