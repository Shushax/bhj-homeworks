let signin = document.getElementById('signin');
let button = document.getElementById('signin__btn')
let form = document.getElementById('signin__form');

window.onload = function() {
    signin.classList.add('signin_active');
}

form.onsubmit = function(e) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    let formdata = new FormData(document.forms[0]);
    xhr.send(formdata);
    if (xhr.responseText.success == 'false') {
        alert('Неверный логин или пароль!');
        return false;
    }
    
}

