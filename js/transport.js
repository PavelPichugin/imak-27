let one = document.querySelector(`.one`);
let form = document.querySelector(`.form`);
let close = document.querySelector(`.close`);

one.addEventListener(`click`, function(e){
    form.classList.toggle(`d-none`);
});
close.addEventListener(`click`, function(e){
    form.classList.toggle(`d-none`);
});