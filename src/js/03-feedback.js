const throttle = require('lodash.throttle');
//Сделал импорт из Storage
import Storage from './storage';
//сделал переменные
const form = document.querySelector('.feedback-form');

// Сделал ключ для локального хранилища
const STORAGE_KEY = 'feedback-form-state';

// Вызов функции хранилища
getTextLocalStorage();

//Повесил слушатилей на форму
form.addEventListener('change', throttle(textSave, 500));
form.addEventListener('submit', getTextFromForm);

//Беру текст  из формы
function getTextFromForm(e) {
  e.preventDefault();

  const formData = new FormData(form);
  formData.forEach((name, value) => console.log(`${value} : ${name}`));

  form.reset();

  Storage.remove(STORAGE_KEY);
}

//запюисываю текст в локальное хранилище
function textSave(e) {
  const { name, value } = e.target;

  let saveData = Storage.load(STORAGE_KEY) ?? {};
  saveData[name] = value;

  Storage.save(STORAGE_KEY, saveData);
}

//Получаю значение из хранилища
function getTextLocalStorage() {
  let saveData = Storage.load(STORAGE_KEY);

  console.log(saveData);
  if (!saveData) return;
  Object.entries(saveData).forEach(
    ([name, value]) => (form.elements[name].value = value)
  );
}
