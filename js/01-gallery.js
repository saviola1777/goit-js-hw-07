import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery')

const imgMarkup = galleryItems.map(imageGallery =>  `<a class="gallery__link" href=${imageGallery.original}>
  <img class="gallery__image" src=${imageGallery.preview} data-source=${imageGallery.original}
  alt=${imageGallery.description} /> </a>`).join("");
  
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
galleryEl.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }
const instance = basicLightbox.create(`<img src=${event.target.dataset.source} >`)
instance.show()
galleryEl.addEventListener("keydown", (event) => {
if (event.code === 'Escape') {
instance.close();
        }
})
   
}
  
    

























  // 1. import { galleryItems } from './gallery-items.js'; -- Ми імпортуємо масив в наш js через посилання
// 2. const imgMarkup --перебираємо імпортований масив через мap в колбек функцію imageGallery ми створюємо посилання і картинки і в src, data - source, alt 
// вставляємо перебрані значення з масиву galleryItems в кінці .join("") щоб перетворити масив в строку ,
// 3. galleryEl.insertAdjacentHTML('beforeend', imgMarkup); --- ми в нашу галерею добавляємо сторену розмітку посилання і картинки і перебрані їхні значееняя 
// 4.galleryEl.addEventListener('click', onClick); ---повісили подію при кліку і колюек функцію 
