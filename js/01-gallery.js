import { galleryItems } from "./gallery-items.js";

// Change code below this line
let divs = "";
for (const image of galleryItems) {
	divs += `<div class="gallery__item">
		<a href="${image.original}" class="gallery__link">
			<image class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}">
		</a>
	</div>`;
}

const instance = basicLightbox.create(
	`
    <div class="modal">
        <img class="modal__img">
		<a>Close</a>
    </div>
`,
	{
		onShow: instance => {
			instance.element().querySelector(".modal__img").onclick = instance.close;
			document.addEventListener("keydown", closeImg);
		},
		onClose: instance => {
			document.removeEventListener("keydown", closeImg);
		},
	},
);

function closeImg(event) {
	if (event.key === "Escape") {
		instance.close();
	}
}

function showImg(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	instance.show();
	const modalImg = document.querySelector(".modal__img");
	modalImg.src = event.target.dataset.source;
}

const gallery = document.querySelector("div.gallery");
gallery.addEventListener("click", showImg);
gallery.insertAdjacentHTML("beforeend", `${divs}`);
