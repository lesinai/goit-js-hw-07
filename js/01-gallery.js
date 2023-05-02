import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
const markupImages= (array)=> {
    const template = array.map((el) =>{ return `<li class="gallery__item">
  <a class="gallery__link" href= ${el.original}>
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.descriotion}"
    />
  </a>
</li>`
    })
        .join("")
    gallery.innerHTML= template
}
markupImages(galleryItems)

const handleGallerycl = (e) => {
    e.preventDefault()
    if (e.target.tagName !== "IMG") {
        return
    }
    const onEscClose = (event) => {
    if (event.key === "Escape") {
      instance.close();    }
  }
    const imgSrc = e.target.getAttribute("data-source")
    const instance = basicLightbox.create(`<div><img src="${imgSrc}" width = "800" height="600"></div>`,
  {onShow: () => {
        document.addEventListener("keydown", onEscClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscClose);
        },
    })
    instance.show()  
}
gallery.addEventListener("click", handleGallerycl)
