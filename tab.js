/*  const buttons = document.querySelectorAll('.tab_menu .tab_link');
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
  });*/


document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     MAIN TABS
  ========================= */
  document.querySelectorAll('.tab').forEach(tabSection => {
    const buttons = tabSection.querySelectorAll('.tab_menu .tab_link');
    const contents = tabSection.querySelectorAll('.tab_content_wrap');

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  });

  /* =========================
     NESTED TABS
  ========================= */
  document.querySelectorAll('.tab_content_wrap').forEach(contentWrap => {
    const nestMenus = contentWrap.querySelectorAll('.nest_tab_menu');

    nestMenus.forEach(menu => {
      const nestButtons = menu.querySelectorAll('.nest_tab_link');
      const nestContents = menu
        .closest('.tab_content_right_wrap')
        .querySelectorAll('.nest_tab_content_wrap');

      nestButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          nestButtons.forEach(btn => btn.classList.remove('active'));
          nestContents.forEach(content => content.classList.remove('active'));

          button.classList.add('active');
          nestContents[index].classList.add('active');
        });
      });
    });
  });

});
