const addButon = document.querySelector('#add-time');
const scheduleItems = document.querySelector('#schedule-items');

addButon.addEventListener('click', cloneField);

function cloneField() {
  const scheduleFieldContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true);

  const fields = scheduleFieldContainer.querySelectorAll('input');

  fields.forEach((field) => {
    field.value = '';
  });

  scheduleItems.appendChild(scheduleFieldContainer);
}
