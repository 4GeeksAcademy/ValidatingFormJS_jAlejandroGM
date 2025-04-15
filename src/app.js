let form = document.querySelector(".form");
form.addEventListener('submit',(e) => {
    const fields = {
        card: document.getElementById("cardNumber"),
        cvc: document.getElementById("cvcNumber"),
        amount: document.getElementById("amount"),
        firstName: document.getElementById("first_name"),
        lastName: document.getElementById("last_name"),
        city: document.getElementById("city"),
        state: document.getElementById("state"),
        postalCode: document.getElementById("postal_code"),
        cardType: document.getElementById("cardType")
    }
    let Error = false;
    const cardTypeChecked = document.querySelector('input[name="payment_method"]:checked');
    const alert = document.querySelector('.alert');

    Object.values(fields).forEach(field => {
        if (field.value === "" || field.selectedIndex === 0 || (field.id === 'cardType' && !cardTypeChecked)) {
            field.classList.add('red');
            Error = true;
        } else {
            field.classList.remove('red');
        }
    });

    if (Error) {
        e.preventDefault();
        alert.classList.remove("d-none");
        console.log("Form has validation errors");
    } else {
        alert.classList.add("d-none");
        console.log("Form submitted");
    }
})
