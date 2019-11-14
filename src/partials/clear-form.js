/* eslint-disable import/prefer-default-export */

const title = document.querySelector('#title-project-input');

const clearForm = () => {
  title.value = '';
};

export { clearForm };
