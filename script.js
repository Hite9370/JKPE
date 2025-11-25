document.addEventListener('DOMContentLoaded', function() {
    const tabMenus = document.querySelectorAll('.w-tab-menu');

    tabMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            const tab = e.target.closest('.w-tab-link');
            if (!tab) return;

            // Wait a tiny bit to let Webflow set the active tab
            setTimeout(() => {
                const containerHeight = menu.clientHeight;
                const elementOffset = tab.offsetTop;
                const elementHeight = tab.clientHeight;

                const scrollPosition = elementOffset - (containerHeight / 2) + (elementHeight / 2);

                menu.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }, 10);
        });
    });
});

