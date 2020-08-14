let textarea = document.getElementById('editor');
textarea.oninput = function() {
    localStorage.value = textarea.value;
}
window.onload = function() {
    textarea.value = localStorage.value;
}