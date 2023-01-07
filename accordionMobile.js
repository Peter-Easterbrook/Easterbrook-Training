let toggleMobile = document.getElementsByClassName('toggleMobile');
let contentMobile = document.getElementsByClassName('contentMobile');
let iconsMobile = document.getElementsByClassName('iconMobile');

for (let i = 0; i < toggleMobile.length; i++) {
  toggleMobile[i].addEventListener('click', () => {
    if (
      parseInt(contentMobile[i].style.height) !== contentMobile[i].scrollHeight
    ) {
      contentMobile[i].style.height = contentMobile[i].scrollHeight + 'px';
      iconsMobile[i].classList.remove('bi-arrow-down-circle');
      iconsMobile[i].classList.add('bi-arrow-up-circle');
    } else {
      contentMobile[i].style.height = '0px';
      iconsMobile[i].classList.remove('bi-arrow-up-circle');
      iconsMobile[i].classList.add('bi-arrow-down-circle');
      contentMobile[i].classList.remove('heightActive');
      contentMobile[i].classList.add('heightActive');
    }

    for (let j = 0; j < contentMobile.length; j++) {
      if (j !== i) {
        contentMobile[j].style.height = 0;
        iconsMobile[j].classList.remove('bi-arrow-up-circle');
        iconsMobile[j].classList.add('bi-arrow-down-circle');
      }
    }
  });
}
