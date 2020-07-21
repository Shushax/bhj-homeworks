getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole__has-mole')) {
            dead += 1;
        } else {
            lost += 1;
        }
    }
}