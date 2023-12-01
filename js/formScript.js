function validateForm(event) {
    const form = event.target.form;
    form.querySelector('button[type="submit"]').disabled = true;

    const isValid = form.checkValidity();

    if (
        document.getElementById('password').value ===
            document.getElementById('confirm_password').value &&
        isValid
    ) {
        form.querySelector('button[type="submit"]').disabled = false;
    }
}

function check() {
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm_password');
    const message = document.getElementById('message');

    if (password.value == '' && confirm_password.value == '') {
        message.style.color = 'white';
        message.innerHTML = '';
        return;
    }

    if (password.value == confirm_password.value) {
        message.style.color = 'green';
        message.innerHTML = 'пароли совпадают';
    } else {
        message.style.color = 'red';
        message.innerHTML = 'пароли не совпадают';
    }
}
password.onkeyup = check;
confirm_password.onkeyup = check;

let form = document.getElementById('survey-form');

form.addEventListener('input', validateForm);
form.addEventListener('change', validateForm);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city =
        document.getElementById('city-dropdown').options[
            document.getElementById('city-dropdown').selectedIndex
        ].text;

    let newWindow = window.open(
        'profile.html',
        '_blank',
        'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=800',
    );

    newWindow.onload = function () {
        newWindow.document.getElementById('name').value = name;
        newWindow.document.getElementById('email').value = email;
        newWindow.document.getElementById('city').value = city;
    };
});
