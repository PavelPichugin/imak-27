let one = document.querySelector(`.one`);
let form = document.querySelector(`.form`);
let close = document.querySelector(`.close`);

one.addEventListener(`click`, function(e){
    form.classList.toggle(`d-none`);
});
close.addEventListener(`click`, function(e){
    form.classList.toggle(`d-none`);
});
let one_one = document.querySelector(`.one_one`);
let form_one = document.querySelector(`.form_one`);
let close_one = document.querySelector(`.close_one`);

one_one.addEventListener(`click`, function(e){
    form_one.classList.toggle(`d-none`);
});
close_one.addEventListener(`click`, function(e){
    form_one.classList.toggle(`d-none`);
});