let close = document.getElementsByClassName('modal__close');
let modal = document.getElementById('modal_main');
show_success = document.getElementsByClassName('show-success');
modal_success = document.getElementById('modal_success');
close[0].onclick = function() {
    modal.className = 'modal';
}
show_success[0].onclick = function() {
    modal_success.style.display = 'flex';
}
close[2].onclick = function() {
    modal.className = 'modal';
    modal_success.style.display = 'none';
}