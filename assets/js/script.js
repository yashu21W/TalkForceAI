document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item.nav-item-has-children');

    navItems.forEach(item => {
        item.querySelector('.nav-link-item.drop-trigger').addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle 'active' class on the parent item
            item.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.nav-item-has-children')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
