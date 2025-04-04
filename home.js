
function HomePage() {
    return `
        <div class="content">
            <button class="btn" id="start-order-btn">Start your order here</button>
        </div>
    `;
}


function HomePageEvents() {
    // Start Order Button: Navigate to Beverage Page
    document.getElementById('start-order-btn').addEventListener('click', () => {
        loadPage('beverage');
    });
}
