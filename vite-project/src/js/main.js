// 1. Импортируем стили
import '../scss/styles.scss';

// 2. Импортируем Bootstrap JS
import * as bootstrap from 'bootstrap';

// 3. Импортируем Luxon
import { DateTime } from 'luxon';

// 4. Создаём структуру страницы
const container = document.createElement('div');
container.className = 'container vh-100 d-flex align-items-center';

const row = document.createElement('div');
row.className = 'row w-100';

// Левая колонка (2 части)
const colLeft = document.createElement('div');
colLeft.className = 'col-2';

// Правая колонка (2 части)
const colRight = document.createElement('div');
colRight.className = 'col-2';

// Центральная колонка (8 частей)
const colCenter = document.createElement('div');
colCenter.className = 'col-8 d-flex align-items-center';

// Создаём кнопку
const button = document.createElement('button');
button.className = 'btn btn-danger btn-lg w-100 py-5';
button.textContent = 'Показать время';
button.setAttribute('data-bs-toggle', 'modal');
button.setAttribute('data-bs-target', '#timeModal');

colCenter.appendChild(button);
row.appendChild(colLeft);
row.appendChild(colCenter);
row.appendChild(colRight);
container.appendChild(row);
document.body.appendChild(container);

// 5. Создаём модальное окно
const modalHTML = `
<div class="modal fade" id="timeModal" tabindex="-1" aria-labelledby="timeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="timeModalLabel">Выполнила: Николь Харитошкина</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body text-center display-4" id="modalTime">
        <!-- Сюда вставится время -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
`;

// Добавляем HTML модального окна на страницу
const modalContainer = document.createElement('div');
modalContainer.innerHTML = modalHTML;
document.body.appendChild(modalContainer.firstElementChild);

// 6. Логика обновления времени
const timeElement = document.getElementById('modalTime');
const modalElement = document.getElementById('timeModal');

modalElement.addEventListener('shown.bs.modal', () => {
    const now = DateTime.local().setLocale('ru').toFormat('dd.MM.yyyy HH:mm:ss');
    timeElement.textContent = now;
});