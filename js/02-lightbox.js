import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery')

const imgMarkup = galleryItems.map(imageGallery => 
  `<a class="gallery__link" href=${imageGallery.original}>
  <img class="gallery__image" src=${imageGallery.preview} alt=${imageGallery.description} /> </a>`).join("");
  
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
galleryEl.addEventListener('click', onClick);

function onClick(event) {
  event.stopPropagation();
  event.preventDefault();
  
  if (event.target === event.currentTarget) {
    return
  }
var lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDeley: 250
  })
}