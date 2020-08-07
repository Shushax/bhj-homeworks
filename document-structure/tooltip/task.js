let aEl = document.getElementsByClassName('has-tooltip');
let a = Array.from(aEl);
let div = document.createElement('div');

for (let oneA of a) {
    oneA.onclick = function(e) {
      e.preventDefault();
      if (div.style.display === 'block') {
          div.style.display = 'none';
          return;
        }
      oneA.after(div);
      div.classList.add('tooltip');
      div.textContent = oneA.title;
      div.style.display = 'block';
   }
}