'use strict';

const addBtn = document.getElementById('add');

let statuses = ['process', 'done', 'missed'];

let tasks = [
  {
    id: 1,
    staff: '',
    description: '',
    date: '',
    status: 0,
  },

  {
    id: 2,
    staff: 'John Smith',
    description: 'Completing new UI design for new project',
    date: '2022-02-9',
    status: 1,
  },

  {
    id: 3,
    staff: 'John Wick',
    description: 'Completing new UI design for new project',
    date: '2022-02-15',
    status: 2,
  },
];

const displayByStatus = (status, task) => {
  const content = document.getElementById(status);
  const html = `<ul>
  <li><h3>${task.staff}</h3></li>
  <li><p>${task.description}</p></li>
  <li><h4 class="date--deadline">${task.date}</h4></li>
 ${
   status === 'process'
     ? `<li><button onclick = changeTaskStatus(${task.id}) class="btn__doing">Bajarildi</button></li>`
     : ''
 } 
  </ul>`;
  content.innerHTML += html;
};

const displayDataUI = allTacks => {
  for (let i = 0; i < statuses.length; i++)
    document.getElementById(statuses[i]).innerHTML = '';

  for (let i = 0; i < allTacks.length; i++) {
    const statusIndex = allTacks[i].status;
    const status = statuses[statusIndex];
    displayByStatus(status, allTacks[i]);
  }
};
displayDataUI(tasks);

function changeTaskStatus(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (id === tasks[i].id) {
      const currentDateMils = new Date().getTime();
      // const currendDays = currentDate / (1000 * 60 * 60 * 24);
      const taskDateMils = new Date(tasks[i].date).getTime();
      // const taskDays = taskDateMils / (1000 * 60 * 60 * 24);
      const differ = taskDateMils - currentDateMils;

      tasks[i].status = differ > 0 ? 1 : 2;
      // const differDays = Math.floor(Math.abs(taskDays - currendDays));
      break;
    }
  }
  displayDataUI(tasks);
}

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const staff = document.getElementById('name');
  const description = document.getElementById('comment');
  const date = document.getElementById('date');
  const lastIndex = tasks.length - 1;
  tasks[lastIndex];
  const currentTask = {
    id: tasks[lastIndex].id + 1,
    staff: staff.value,
    description: description.value,
    date: date.value,
    status: 0,
  };
  tasks.push(currentTask);
  displayDataUI(tasks);

  const form = document.forms['addForm'];
  form.reset();
});
