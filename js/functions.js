//Opening box with information about thing
function openAndClosedBlock(classParent, elemSearch, openBlock, classNameClosed) {
  [...document.querySelectorAll(classParent)].forEach((el) => {
    let openBl = el.querySelector(openBlock);
    let elem = el.querySelector(elemSearch);
    elem.onclick = (e) => {
      openBl.style.display = "block";
    };
    el.querySelector(classNameClosed).onclick = (e) => {
      openBl.style.display = "none";
    };
  });
}

//Opening box form in information about thing
function openFormFromOrder(classParent, elemSearch, openBlock, classNameClosed) {
  [...document.querySelectorAll(classParent)].forEach((el) => {
    let elem = el.querySelector(elemSearch);
    let openBl = el.querySelector(openBlock);
    let closed = el.querySelector(classNameClosed);
    elem.onclick = (e) => {
      openBl.style.display = "block";
      closed.style.display = "none";
    };
  });
}

//Form call back
const PHONE_MASK = "^(\\+7|8)[\\d]{10}$";
const MAIL_MASK = "^[a-zA-z]+\\W?[a-z]+@[a-zA-z]+\\.[a-z]{2,3}$";
const NAME_MASK = "^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$";

function getMask(name) {
  return name === "phone" ? PHONE_MASK : name === "email" ? MAIL_MASK : NAME_MASK;
}

function test(mask, domElem, domfildError, messageError, messageNotCorrect, className, classNameValue) {
  if (domElem.value === "") {
    domfildError.innerHTML = messageError;
  } else if (new RegExp(getMask(mask)).test(domElem.value)) {
    domfildError.innerHTML = "";
    domElem.setAttribute(className, classNameValue);
  } else {
    domfildError.innerHTML = messageNotCorrect;
  }
}
