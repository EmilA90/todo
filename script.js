const btn = document.querySelector('#btn');


//ADD INPUT WITH BTN and remove
btn.addEventListener('click', () => {
    const input = document.querySelector('#input-text').value;
    const ul = document.querySelector('#ul')
    const li = document.createElement('li')
    li.innerHTML = `<div class="input-value">${input}</div> <div class="div-img"><img id="close-white" src="close-white.svg" alt="close"></div>`
    ul.appendChild(li)

    document.querySelector('#input-text').value = ''

    li.querySelector('.div-img img').addEventListener('click', (e) => {
      e.target.parentNode.parentNode.remove();
      updateTaskListVisibility()
    });
    updateTaskListVisibility();
  });


//ADD INPUT WITH ENTER KEY and Remove

  document.querySelector('#input-text').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      const input = document.querySelector('#input-text').value;
      const ul = document.querySelector('#ul')
      const li = document.createElement('li')
      li.innerHTML = `<div class="input-value">${input}</div> <div class="div-img"><img id="close-white" src="close-white.svg" alt="close"></div>`
      ul.appendChild(li)

      document.querySelector('#input-text').value = ''

      li.querySelector('.div-img img').addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        updateTaskListVisibility()
      });
    }updateTaskListVisibility();
  });

//CLEAR INPUT TEXT
  const mainClose = document.querySelector(".menu-section #close-white")
  mainClose.addEventListener('click', () => {
  const input = document.querySelector('#input-text').value = '';
  updateTaskListVisibility()
})




// Sort Func
let sortOrder = 'asc';

function sortList() {
  var list = document.getElementById("ul");
  var items = list.getElementsByTagName("li");
  var itemsArr = [];
  for (var i = 0; i < items.length; i++) {
    itemsArr.push(items[i]);
  }
  if (sortOrder === 'asc') {
    itemsArr.sort(function(a, b) {
      var textA = a.getElementsByClassName("input-value")[0].textContent;
      var textB = b.getElementsByClassName("input-value")[0].textContent;
      return textA.localeCompare(textB);
    });
    sortOrder = 'desc';
  } else {
    itemsArr.sort(function(a, b) {
      var textA = a.getElementsByClassName("input-value")[0].textContent;
      var textB = b.getElementsByClassName("input-value")[0].textContent;
      return textB.localeCompare(textA);
    });
    sortOrder = 'asc';
  }
  for (i = 0; i < items.length; i++) {
    list.appendChild(itemsArr[i]);
  }
}

document.getElementById("test-button").addEventListener("click", sortList);


//non visible 
const ul = document.querySelector('#ul');
const taskList = document.querySelector('.task-list');
function updateTaskListVisibility() {
if (ul.children.length === 0) {
taskList.style.display = 'none';
} else {
taskList.style.display = 'block';
}
}

updateTaskListVisibility();