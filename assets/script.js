const firstPrice = document.querySelector(".first-dress-price").innerText;
const firstMinus = document.querySelector(".first-dress-minus");
const firstMinusMd = document.querySelector(".first-dress-minus-md");
const firstQty = document.querySelector(".first-dress-qty");
const firstQtyMd = document.querySelector(".first-dress-qty-md");
const firstPlus = document.querySelector(".first-dress-plus");
const firstPlusMd = document.querySelector(".first-dress-plus-md");
const firstDressCard = document.getElementById("first-item-card");

const secondPrice = document.querySelector(".second-dress-price").innerText;
const secondMinus = document.querySelector(".second-dress-minus");
const secondMinusMd = document.querySelector(".second-dress-minus-md");
const secondQty = document.querySelector(".second-dress-qty");
const secondQtyMd = document.querySelector(".second-dress-qty-md");
const secondPlus = document.querySelector(".second-dress-plus");
const secondPlusMd = document.querySelector(".second-dress-plus-md");
const secondDressCard = document.getElementById("second-item-card");

const subtotal = document.getElementById("subtotal");
const envio = document.getElementById("envio");
const total = document.getElementById("total");
const anuncio = document.getElementById("anuncio");

const deleteFirstDress = document.getElementById("first-trash");
const deleteSecondDress = document.getElementById("second-trash");

const freeShipping = (amount) => {
	const minimum = 30000;
	if (amount > minimum) {
		envio.innerText = "Gratis";
		total.innerText = `$ ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
		anuncio.innerText = "¡Tu envío es gratis!";
	} else {
		envio.innerText = `$ ${(2000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
		total.innerText = `$ ${(amount + 2000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
		anuncio.innerText = `Te faltan $ ${30000 - amount} para envio gratis`;
		// ¡Tu envío es gratis!
	}
};
const subtotalCalculator = () => {
	let firstDressPrice = Number(firstPrice.replace("$", "").replace(".", "")) * Number(firstQty.innerText);
	let secondDressPrice = Number(secondPrice.replace("$", "").replace(".", "")) * Number(secondQty.innerText);
	let amount = firstDressPrice + secondDressPrice;
	subtotal.innerText = `$ ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
	freeShipping(amount);
};
subtotalCalculator();

deleteFirstDress.addEventListener("click", () => {
	firstDressCard.classList.add("d-none");
	firstQty.innerText = 0;
	firstQtyMd.innerText = 0;
	subtotalCalculator();
});

deleteSecondDress.addEventListener("click", () => {
	secondDressCard.classList.add("d-none");
	secondQty.innerText = 0;
	secondQtyMd.innerText = 0;
	subtotalCalculator();
});

firstMinus.addEventListener("click", () => {
	let currentQty = Number(firstQty.innerText);
	currentQty <= 0 ? currentQty : currentQty--;
	firstQty.innerText = currentQty;
	firstQtyMd.innerText = currentQty;
	subtotalCalculator();
});
firstMinusMd.addEventListener("click", () => {
	let currentQty = Number(firstQtyMd.innerText);
	currentQty <= 0 ? currentQty : currentQty--;
	firstQty.innerText = currentQty;
	firstQtyMd.innerText = currentQty;
	subtotalCalculator();
});

firstPlus.addEventListener("click", () => {
	let currentQty = Number(firstQty.innerText);
	currentQty++;
	firstQty.innerText = currentQty;
	firstQtyMd.innerText = currentQty;
	subtotalCalculator();
});

firstPlusMd.addEventListener("click", () => {
	let currentQty = Number(firstQty.innerText);
	currentQty++;
	firstQty.innerText = currentQty;
	firstQtyMd.innerText = currentQty;
	subtotalCalculator();
});

secondMinus.addEventListener("click", () => {
	let currentQty = Number(secondQty.innerText);
	currentQty <= 0 ? currentQty : currentQty--;
	secondQty.innerText = currentQty;
	secondQtyMd.innerText = currentQty;
	subtotalCalculator();
});

secondMinusMd.addEventListener("click", () => {
	let currentQty = Number(secondQtyMd.innerText);
	currentQty <= 0 ? currentQty : currentQty--;
	secondQty.innerText = currentQty;
	secondQtyMd.innerText = currentQty;
	subtotalCalculator();
});

secondPlus.addEventListener("click", () => {
	let currentQty = Number(secondQty.innerText);
	currentQty++;
	secondQty.innerText = currentQty;
	secondQtyMd.innerText = currentQty;
	subtotalCalculator();
});

secondPlusMd.addEventListener("click", () => {
	let currentQty = Number(secondQtyMd.innerText);
	currentQty++;
	secondQty.innerText = currentQty;
	secondQtyMd.innerText = currentQty;
	subtotalCalculator();
});
