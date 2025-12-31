let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px';
      contentDiv[i].style.border = '1px solid #bbcaf6';
      icons[i].style.transform = 'rotate(180deg)';
    } else {
      contentDiv[i].style.height = '0px';
      contentDiv[i].style.border = 'none';
      icons[i].style.transform = 'rotate(0deg)';
      contentDiv[i].classList.remove('heightActive');
      contentDiv[i].classList.add('heightActive');
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = 0;
        contentDiv[j].style.border = 'none';
        icons[j].style.transform = 'rotate(0deg)';
      }
    }
  });
}
