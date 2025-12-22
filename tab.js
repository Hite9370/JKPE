  const buttons = document.querySelectorAll('.tab_menu .tab_link');
  const contents = document.querySelectorAll('.tab_content_wrap');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove active class from all
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      // Activate clicked tab
      button.classList.add('active');
      contents[index].classList.add('active');
    });
  });
