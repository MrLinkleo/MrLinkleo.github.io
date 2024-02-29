const countdown = document.querySelector('.countdown');
const targetDate = new Date('2024-03-08T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const remainingTime = targetDate - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);


const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  document.querySelector(".menu-list").classList.toggle("show");
});




 // let menuList = document.querySelector(".menu-list");
 // let menu = document.querySelector(".menu-list");


 // menuList.addEventListener('click', function(){
 //   menuList.classList.toggle('active');
 //   menu.classList.toggle('active');
 // });

