let form = document.getElementById('form');
let formData = new FormData(form);
let progress = document.getElementById('progress');
let button = document.getElementById('send')

form.onsubmit = function(e) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
    xhr.upload.onprogress = function(event) {
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
    }
    return false;
}