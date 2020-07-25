let menuLink = document.getElementsByClassName('menu__link');
let links = Array.from(menuLink);
let menu_sub = document.getElementsByClassName('menu_sub')
for (let link of links) {
    link.onclick = function() {
        if (link.nextElementSibling) {
            link.nextElementSibling.className = 'menu menu_sub menu_active';
            return false;
        }
    }
}