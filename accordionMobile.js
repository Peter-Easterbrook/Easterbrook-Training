let toggleMobile = document.getElementsByClassName('toggleMobile');
let contentMobile = document.getElementsByClassName('contentMobile');
let iconsMobile = document.getElementsByClassName('iconMobile');

for (let i = 0; i < toggleMobile.length; i++) {
  toggleMobile[i].addEventListener('click', () => {
    if (
      parseInt(contentMobile[i].style.height) !== contentMobile[i].scrollHeight
    ) {
      contentMobile[i].style.height = contentMobile[i].scrollHeight + 'px';
      contentMobile[i].style.border = '1px solid #fffff7';
      iconsMobile[i].style.transform = 'rotate(180deg)';
    } else {
      contentMobile[i].style.height = '0px';
      contentMobile[i].style.border = 'none';
      iconsMobile[i].style.transform = 'rotate(0deg)';
      contentMobile[i].classList.remove('heightActive');
      contentMobile[i].classList.add('heightActive');
    }

    for (let j = 0; j < contentMobile.length; j++) {
      if (j !== i) {
        contentMobile[j].style.height = 0;
        contentMobile[j].style.border = 'none';
        iconsMobile[j].style.transform = 'rotate(0deg)';
      }
    }
  });
}
