// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from '/node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const paletteContainer = document.querySelector('.gallery');
let galleryMarkup = createGalleryMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery__item a', {
  nav: true,
  captionDelay: 250,
  captionsData: 'alt',
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(item => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>
</div>
`;
    })
    .join(' ');
}
