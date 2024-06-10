
let toggle = document.getElementById('toggle');
let box = document.getElementById('menu');
let menuLinks = document.querySelectorAll('#menu a');
let toggleCheckbox = toggle.querySelector('input[type="checkbox"]');

toggle.addEventListener('click', function() {
    box.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        box.classList.remove('active');
        toggleCheckbox.checked = false; // Сбрасываем состояние чекбокса
    });
});
