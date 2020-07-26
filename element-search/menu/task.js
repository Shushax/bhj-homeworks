let menuLink = document.getElementsByClassName('menu__link');
let links = Array.from(menuLink);
for (let link of links) {
    link.onclick = function() {
        if (link.nextElementSibling.className.includes('menu_active')) {
            link.nextElementSibling.classList.remove('menu_active');
            return false;
        } else if (link.nextElementSibling) {
            link.nextElementSibling.classList.add('menu_active');
            return false;
        }
    }
}