/*document.addEventListener('DOMContentLoaded', function() {
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
});*/


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.use_case_tab_link');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.classList.remove('w--current');

                const overflow = t.querySelector('.use_case_overflow');
                if (overflow) {
                    overflow.style.height = '0'; // collapse others
                }
            });

            // Make clicked tab active
            tab.classList.add('w--current');

            const overflow = tab.querySelector('.use_case_overflow');
            if (overflow) {
                overflow.style.height = overflow.scrollHeight + 'px'; // expand smoothly
            }
        });
    });

    // Set initial active tab height
    const initial = document.querySelector('.use_case_tab_link.w--current');
    if (initial) {
        const overflow = initial.querySelector('.use_case_overflow');
        if (overflow) {
            overflow.style.height = overflow.scrollHeight + 'px';
        }
    }
});


