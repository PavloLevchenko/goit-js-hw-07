import { galleryItems } from "./gallery-items.js";
// Change code below this line

const insertHTML = galleryItems.reduce((insertHTML, image) => {
	return (insertHTML += `<li>
			<a href="${image.original}" class="gallery__item">
				<image class="gallery__image" src="${image.preview}" alt="${image.description}">
			</a>
		</li>`);
}, "");

const gallery = document.querySelector("ul.gallery");
gallery.insertAdjacentHTML("beforeend", insertHTML);

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
	captions: true,
	captionSelector: "img",
	captionType: "attr",
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
	captionClass: "gallery__caption",
});
