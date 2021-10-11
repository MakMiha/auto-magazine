//Переменные
const image = document.querySelectorAll('.gallery__image');
const nextImageButton = document.querySelector('.gallery__slider-next');
const prevImageButton = document.querySelector('.gallery__slider-prev');
const review = document.querySelectorAll('.review__text');
const dot = document.querySelectorAll('.review__dot');
const reviewLink = document.querySelectorAll('.review__button');
const menu = document.querySelector('.header__button-menu');
const logoHeader = document.querySelector('.logo_place_header');
const linksHeader = document.querySelector('.header__links');
const formSubscribe = document.querySelector('form[name="form-subscribe"]');
const buttonSubscribe = document.querySelector('.form-container__button');
let imageIndex = 0;
let dotIndex = 0;

//Меню
menu.addEventListener('click', (evt) =>{
  evt.target.classList.toggle('header__button-menu_view_close');
  logoHeader.classList.toggle('logo_display_active');
  linksHeader.classList.toggle('header__links_display_active');
});

//Изменение текста кнопки в форме.
formSubscribe.addEventListener('submit', (evt) => {
  evt.preventDefault();
  buttonSubscribe.innerText = 'Готово!';
});

//Предыдущая фотография
nextImageButton.addEventListener('click', (evt) => {
  imageIndex--;
  imageIndex < 0 && (imageIndex = image.length-1);
  showImage(imageIndex);
});
//Следующая фотография
prevImageButton.addEventListener('click', (evt) => {
  imageIndex++;
  imageIndex >= image.length && (imageIndex = 0);
  showImage(imageIndex)
});

//Отображение фотографии
showImage(imageIndex);
function showImage(index){
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  image[index].style.display = "block";
};

//Отображение отзыва
dot.forEach(function(review, index){
  review.addEventListener('click', (evt) => {
    showReview(index);
  });
});
showReview(dotIndex);
function showReview(index){
  for (let i = 0; i < dot.length; i++) {
    review[i].style.display = "none";
    reviewLink[i].style.display = "none";
    dot[i].classList.remove('review__dot_active');
  }
  review[index].style.display = "block";
  reviewLink[index].style.display = "block";
  dot[index].classList.add('review__dot_active');
};