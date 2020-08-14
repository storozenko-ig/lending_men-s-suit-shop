//Opening box with infortion about thing
openInformationAboutThing(".catalog-item", "img", ".open-info-item-wrapper", ".close", "div.open-picturs > img", ".test");

//Opening Form
openAndClosedBlock(".catalog-item", ".buy-item-btn", ".popup-form", ".popur-form-closed");

//Opening Form to order
openFormFromOrder(".catalog-item", ".open-info-buy-btn", ".popup-form", ".open-info-item-wrapper");

//Form call back
//
//messageName
const nameError = "Поле обязательно для заполнения";
const nameNotCorrect = "Проверьте поле имя";
// messagePhone
const phoneError = "Поле обязательно для заполнения";
const phoneNotCorrect = "Некооректный номер телефона";
//messageEmail
const emailError = "Поле обязательно для заполнения";
const emailNotCorrect = "Некооректный почтовый адрес";

[...document.querySelectorAll(".popup-form-inner")].forEach((el) => {
  let nameFildError = el.querySelector(".fild-error-one");
  let phoneFildError = el.querySelector(".fild-error-two");
  let emailFildError = el.querySelector(".fild-error-three");
  el.querySelector(".fild-contener-bth").onclick = (evt) => {
    evt.preventDefault();
    for (let input of el.querySelectorAll(".input-all")) {
      if (input.dataset.validatio === "name") {
        test(input.dataset.validatio, input, nameFildError, nameError, nameNotCorrect);
      } else if (input.dataset.validatio === "phone") {
        test(input.dataset.validatio, input, phoneFildError, phoneError, phoneNotCorrect, "data-correct", "true");
      } else if (input.dataset.validatio === "email") {
        test(input.dataset.validatio, input, emailFildError, emailError, emailNotCorrect);
      }
    }
    for (let input of document.querySelectorAll("[data-correct]")) {
      if (input.dataset.correct) {
        el.querySelector(".form").onsubmit = async () => {
          let formData = new FormData(form);
          let respons = await fetch("URL", {
            method: "GET",
            body: formData,
          });
          let result = await respons.json();
          console.log(result);
        };
      } else {
        return false;
      }
    }
  };
});
