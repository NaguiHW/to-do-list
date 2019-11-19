/* eslint-disable import/prefer-default-export */
const errors = document.querySelector('.errors');

const errorForm = (errorMessage) => {
  const message = document.createElement('p');
  message.setAttribute('class', 'notification is-danger');
  message.innerHTML = errorMessage;
  errors.appendChild(message);
  setTimeout(() => message.remove(), 4000);
};

export { errorForm };
