
function ConfirmationPage() {
    return `
        <div class="container">
            <h2 style="text-align: center;">Order Confirmation</h2>
            <p><strong>Order ID: 24</strong></p>
            <p><strong>${state.beverage}</strong> <strong>with</strong> <strong>${state.condiments.map(condiment => `${condiment}`).join(', ')}</strong>!</p>
            <p><strong>Total Cost: $5.99</strong></p>
            <button class="btn" id="go-back-btn">Place New Order</button>
        </div>
    `;
}


function ConfirmationPageEvents() {
    document.getElementById('go-back-btn').addEventListener('click', () => {
        loadPage('home');
    });
}
