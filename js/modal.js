function validateForm(event) {
    const form = event.target.form;
    form.querySelector('button[type="submit"]').disabled = true;

    const isValid = form.checkValidity();

    if (isValid) {
        form.querySelector('button[type="submit"]').disabled = false;
    }
}

let form = document.getElementById('modal__form');

form.addEventListener('input', validateForm);
form.addEventListener('change', validateForm);

const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.join_button');
const closeModalBtn = document.querySelector('.btn-close');

const openModal = function () {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
};

const closeModal = function () {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
