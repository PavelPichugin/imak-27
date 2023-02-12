var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


let books = document.querySelectorAll(`.book`);
let input = document.querySelector(`.form-control`);

input.addEventListener(`input`, function(e) {
    let search = e.target.value.toLowerCase();


    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let title = book.innerHTML.toLowerCase();

        if ( title.includes(search)){
            book.classList.remove(`d-none`);
        }else{
            book.classList.add(`d-none`);
        }
    }
});

let svaz = document.querySelector(`.svaz`);
let svaz_one = document.querySelector(`.svaz_one`);
let svaz_two = document.querySelector(`.svaz_two`);


svaz.addEventListener(`click`, function(e){
  svaz_one.classList.toggle(`svaz_form_animate`);
  svaz_two.classList.toggle(`svaz_form_animate_one`);
});
let pashalka = document.querySelector(`.pashalka`);
let pashalka_img = document.querySelector(`.pashalka_img`);

pashalka.addEventListener(`click`, function(e){
  pashalka_img.classList.toggle(`d-none`);
});
pashalka_img.addEventListener(`click`, function(e){
  pashalka_img.classList.toggle(`d-none`);
});