var link = document.querySelector(".reservation_button_brown");
var form = document.querySelector(".reservation_form");
var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");
var adultsAmount = form.querySelector("[name=amount-adults]");
var childrenAmount = form.querySelector("[name=amount-children]");

form.classList.remove("reservation_form_show");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("reservation_form_show");
    form.classList.remove("reservation_form_error");
    arrivalDate.focus();
});

form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adultsAmount.value || !childrenAmount.value) {
        evt.preventDefault();
        form.classList.remove("reservation_form_error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("reservation_form_error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (form.classList.contains("reservation_form_show")) {
            form.classList.remove("reservation_form_show");
            form.classList.remove("reservation_form_error");
        }
    }
});
