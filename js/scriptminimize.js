var link=document.querySelector(".reservation_button_brown"),form=document.querySelector(".reservation_form"),arrivalDate=form.querySelector("[name=arrival-date]"),departureDate=form.querySelector("[name=departure-date]"),adultsAmount=form.querySelector("[name=amount-adults]"),childrenAmount=form.querySelector("[name=amount-children]");link.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("reservation_form_show"),form.classList.add("reservation_form_animation"),form.classList.remove("reservation_form_error"),arrivalDate.focus()}),form.addEventListener("submit",function(e){arrivalDate.value&&departureDate.value&&adultsAmount.value&&childrenAmount.value||(e.preventDefault(),form.classList.remove("reservation_form_error"),form.offsetWidth=form.offsetWidth,form.classList.add("reservation_form_error"))});
