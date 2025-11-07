const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const overlay = document.querySelector(".overlay");

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    overlay.classList.toggle('active');
})

  overlay.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  overlay.classList.remove("active");
  hamMenu.classList.remove('active');
})