document.addEventListener('DOMContentLoaded', function () {
  const submitBook = document.getElementById('inputBook');

  submitBook.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener('ondatasaved', () => {
  console.log('The data was successfully saved.');
});
document.addEventListener('ondataloaded', () => {
  refreshDataFrombooks();
});

function changeText() {
  const checkbox = document.getElementById('inputBookIsComplete');
  const textSubmit = document.getElementById('textSubmit');

  if (checkbox.checked == true) {
    textSubmit.innerText = "It's done reading";
  } else {
    textSubmit.innerText = 'Not finished reading';
  }
}
