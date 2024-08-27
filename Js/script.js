document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.mobile-menu-icon button');
    const header = document.querySelector('.cabecalho');
  
    menuIcon.addEventListener('click', function() {
      header.classList.toggle('open');
    });
  });