import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state ';
const refs = {
  form: document.querySelector('.feedback-form '),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.email'),
};

let formData = {};
refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('change', throttle(onSaveLocalStorage, 500));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const parseEl = JSON.parse(saveMessage);
  console.log('email: ', parseEl.email);
  console.log('message: ', parseEl.message);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onSaveLocalStorage(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(evt) {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const parseEl = JSON.parse(saveMessage);

  if (saveMessage) {
    refs.textarea.value = parseEl.message;
    refs.email.value = parseEl.email;
  }
}
