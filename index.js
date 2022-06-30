const form = document.querySelector("form");
const ismInputi = document.querySelector(".ism");
const famInputi = document.querySelector(".fam");
const dataInputi = document.querySelector(".data");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const cardlar1 = document.querySelector(".input_section");
const cardlar2 = document.querySelector(".input_center");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  cardlar1.insertAdjacentHTML(
    "afterbegin",
    `
    <figure>
      <figcaption>
       <img
        width="200px"
        height="200px"
        src="./photo_2022-05-10_19-32-57.jpg"
        alt="test"
      />
        <h4>${ismInputi.value}</h4>
        <p>${famInputi.value}</p>
        <p>${dataInputi.value}</p>
      </figcaption>
    </figure>
    `
  );
});
btn1.addEventListener("click", (event) => {
  event.preventDefault();
  cardlar2.classList.add("active");
  btn.classList.add("active");
});
btn.addEventListener("click", (event) => {
  alert(
    "salom " + ismInputi.value + " " + famInputi.value + " Ro'yxatdan o'tingiz"
  );
});
