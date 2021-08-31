
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
const itemsArr = Array.from(items);
console.log("Number of categories:", itemsArr.length);

for (const itemEl of itemsArr) {
    const headerEl = itemEl.querySelector("h2");
    console.log("Category:", headerEl.textContent); 

    const listEl = itemEl.querySelectorAll("li");
    console.log("Elements:", listEl.length)
