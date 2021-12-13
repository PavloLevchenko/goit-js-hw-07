import { galleryItems } from "./gallery-items.js";

// Change code below this line
const ul = [];
for (const image of galleryItems) {
	const li = document.createElement("li");
	li.classList.add("gallery__item");
	li.insertAdjacentHTML(
		"beforeend",
		`<a href="${image.original}" class="gallery__link"><image class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}"></a>`,
	);
	ul.push(li);
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
gallery.append(...ul);
