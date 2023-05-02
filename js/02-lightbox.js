import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
const markupImages= (array)=> {
    const template = array.map((el) =>{ return `<li class="gallery__item">
   <a class="gallery__link" href=${el.original}>
      <img class="gallery__image" src=${el.preview} alt=${el.descriotion} />
   </a>
</li>`

    })
        .join("")
    gallery.innerHTML= template
}
markupImages(galleryItems)
const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});