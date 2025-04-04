function OrderStatusPage() {
    const orderDetails = state.beverage
        ? `Beverage: ${state.beverage}, Condiments: ${state.condiments.join(', ') || 'None'}`
        : 'No order placed yet.';

    return `
        <div class="container">
            <h2>Order Status</h2>
            <p>${orderDetails}</p>
            <button class="btn" id="back-to-home-btn">Back to Home</button>
        </div>
    `;
}


function OrderStatusPageEvents() {
    document.getElementById('back-to-home-btn').addEventListener('click', () => {
        loadPage('home');
    });
}
