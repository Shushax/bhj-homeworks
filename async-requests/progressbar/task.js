let progress = document.getElementById('progress');
let button = document.getElementById('send')

form.onsubmit = function(e) {
    e.preventDefault();
    let form = document.getElementById('form');
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function(event) {
        if (event.loaded !== event.total) {
            progress.value += 0.1;
        } else {
           progress.value = 1.0;
           alert('Файл загружен успешно!');
        }
    }

    xhr.send(formData);
}