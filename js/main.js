const cardbutton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cardbutton.addEventListener('click', function(event){
    modal.classList.add('modal-open');
});

close.addEventListener('click', function(event){
    modal.classList.remove('modal-open');
});

new WOW().init();
