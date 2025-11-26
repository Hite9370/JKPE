document.addEventListener('DOMContentLoaded', function() {
    const tabMenu = document.querySelector('.use_case_tabs_menu');
    const tabs = document.querySelectorAll('.use_case_tab_link');

    if (!tabMenu || tabs.length === 0) return;

    function scrollTabToCenter(tab) {
        const containerHeight = tabMenu.clientHeight;
        const tabOffset = tab.offsetTop;
        const tabHeight = tab.offsetHeight;

        const scrollPos = tabOffset - (containerHeight / 2) + (tabHeight / 2);

        tabMenu.scrollTo({
            top: scrollPos,
            behavior: 'smooth'
        });
    }

    tabs.forEach(tab => {
        const overflow = tab.querySelector('.use_case_overflow');
        if (overflow) {
            // Set initial collapsed height
            overflow.style.height = tab.classList.contains('w--current') 
                                    ? overflow.scrollHeight + 'px'
                                    : '0';
            overflow.style.transition = 'height 0.4s ease';
        }

        tab.addEventListener('click', function(e) {
            tabs.forEach(t => {
                t.classList.remove('w--current');
                const ov = t.querySelector('.use_case_overflow');
                if (ov) ov.style.height = '0';
            });

            tab.classList.add('w--current');

            if (overflow) {
                // Expand smoothly
                overflow.style.height = overflow.scrollHeight + 'px';
            }

            // Scroll active tab to center AFTER small delay
            setTimeout(() => {
                scrollTabToCenter(tab);
            }, 50); // small delay to let height animation kick in
        });
    });

    // Scroll initially active tab to center on page load
    const initialActive = tabMenu.querySelector('.use_case_tab_link.w--current');
    if (initialActive) {
        setTimeout(() => {
            scrollTabToCenter(initialActive);
        }, 50);
    }
});


  /*const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });*/

const swiper1 = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const swiper2 = new Swiper(".testimonials", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".testimonials-button-next",
    prevEl: ".testimonials-button-prev",
  },
});








