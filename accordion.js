let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px';

      toggles[i].style.color = '#fff';
      icons[i].classList.remove('fa-arrow-alt-circle-down');
      icons[i].classList.add('fa-arrow-alt-circle-up');
    } else {
      contentDiv[i].style.height = '0px';
      toggles[i].style.color = '#fff';
      icons[i].classList.remove('fa-arrow-alt-circle-up');
      icons[i].classList.add('fa-arrow-alt-circle-down');

      contentDiv[i].classList.remove('heightActive');
      contentDiv[i].classList.add('heightActive');
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.color = '#fff';
        icons[j].classList.remove('fa-arrow-alt-circle-up');
        icons[j].classList.add('fa-arrow-alt-circle-down');
      }
    }
  });
}
