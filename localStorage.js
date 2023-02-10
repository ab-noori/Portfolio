const formString = document.querySelector('.form-itself');
formString.addEventListener('input', () => {
  const information = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('textarea').value,
  };

  localStorage.setItem('formString', JSON.stringify(information));
});