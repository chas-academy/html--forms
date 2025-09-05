const form = document.getElementById("basicForm");
const amount = form.elements.amount;
const result = form.elements.result;

async function loadPart(file, container) {
  const res = await fetch(file);
  const text = await res.text();

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = text;
  const template = tempDiv.querySelector("template");

  if (template) {
    const templateContent = template.content.cloneNode(true);
    return container.appendChild(templateContent);
  } else {
    return container.insertAdjacentHTML("beforeend", text);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data?.entries());

  if (dataObject) {
    console.log("resultat:", dataObject);
  }
});

form.addEventListener("input", () => {
  if (result.value && amount.value) {
    result.value = amount.value;
  }
});

/* ------------------------------------- */
/* Laddar in delar av sidan från olika filer */

(async function () {
  // await loadPart("section1.html", form);
})();

/* ------------------------------------- */
