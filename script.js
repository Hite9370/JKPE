document.addEventListener('DOMContentLoaded', function() {
    const tabMenu = document.querySelector('.use_case_tabs_menu');

    if (!tabMenu) return;

    tabMenu.addEventListener('click', function(e) {
        const tab = e.target.closest('.use_case_tab_link');
        if (!tab) return;

        // Give Webflow a tiny delay to update the active tab
        setTimeout(() => {
            const containerHeight = tabMenu.clientHeight;
            const tabOffset = tab.offsetTop;
            const tabHeight = tab.offsetHeight;

            const scrollPos = tabOffset - (containerHeight / 2) + (tabHeight / 2);

            tabMenu.scrollTo({
                top: scrollPos,
                behavior: 'smooth'
            });
        }, 20);
    });

    // Optional: scroll to the initially active tab on page load
    const initialActive = tabMenu.querySelector('.w--current');
    if (initialActive) {
        const containerHeight = tabMenu.clientHeight;
        const tabOffset = initialActive.offsetTop;
        const tabHeight = initialActive.offsetHeight;

        const scrollPos = tabOffset - (containerHeight / 2) + (tabHeight / 2);

        tabMenu.scrollTo({
            top: scrollPos,
            behavior: 'auto'
        });
    }
});
