// Shared state for the application
const state = {
    beverage: null,
    condiments: []
};

// Function to load a page dynamically
function loadPage(page) {
    const app = document.getElementById('app');

    switch (page) {
        case 'home':
            app.innerHTML = HomePage();
            HomePageEvents();
            break;

        case 'beverage':
            app.innerHTML = BeveragePage();
            BeveragePageEvents();
            break;

        case 'condiment':
            app.innerHTML = CondimentPage();
            CondimentPageEvents();
            break;

        case 'confirmation':
            app.innerHTML = ConfirmationPage();
            ConfirmationPageEvents();
            break;

        case 'orderStatus':
            app.innerHTML = OrderStatusPage();
            OrderStatusPageEvents();
            break;

        default:
            app.innerHTML = '<h1>404 Page Not Found</h1>';
            break;
    }
}

// Initialize with the home page
document.addEventListener('DOMContentLoaded', function () {
    loadPage('home');

    // Add event listener for "Order Status" button in the header
    document.getElementById('order-status-btn').addEventListener('click', () => {
        loadPage('orderStatus');
    });
});
