const errors = document.querySelector('.errors');

const errorForm = () => {
  const message = document.createElement('p');
  message.setAttribute('class', 'notification is-danger');
  message.innerHTML = 'Please fill the empty fields.';
  errors.appendChild(message);
  setTimeout(() => message.remove(), 4000);
};

export { errorForm };