let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px';
      contentDiv[i].style.border = '1px solid #fffff7';
      toggles[i].style.color = '#fff';
      icons[i].classList.remove('bi-arrow-down-circle');
      icons[i].classList.add('bi-arrow-up-circle');
    } else {
      contentDiv[i].style.height = '0px';
      toggles[i].style.color = '#fff';
      icons[i].classList.remove('bi-arrow-up-circle');
      icons[i].classList.add('bi-arrow-down-circle');
      contentDiv[i].classList.remove('heightActive');
      contentDiv[i].classList.add('heightActive');
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        toggles[j].style.color = '#fff';
        icons[j].classList.remove('bi-arrow-up-circle');
        icons[j].classList.add('bi-arrow-down-circle');
      }
    }
  });
}
