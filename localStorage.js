const formString = document.querySelector('.form-itself');
formString.addEventListener('input', () => {
  const information = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('textarea').value,
  };

  localStorage.setItem('formString', JSON.stringify(information));
});

const formObj = JSON.parse(localStorage.getItem('formString'));
document.getElementById('name').value = formObj.name;
document.getElementById('email').value = formObj.email;
document.getElementById('textarea').value = formObj.message;
