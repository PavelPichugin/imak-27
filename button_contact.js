console.log(`☑ сайт разработал Пичугин Павел ☑`);
let svaz = document.querySelector(`.svaz`);
let svaz_one = document.querySelector(`.svaz_one`);
let svaz_two = document.querySelector(`.svaz_two`);
svaz.addEventListener(`click`, function(e){
  svaz_one.classList.toggle(`svaz_form_animate`);
  svaz_two.classList.toggle(`svaz_form_animate_one`);
});
