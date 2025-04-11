
function ConfirmationPage() {
    if (!state.receipt) {
        return `<div class="container"><h2>Error: No receipt found.</h2></div>`;
    }

    return `
        <div class="container">
            <h2 style="text-align: center;">Order Confirmation</h2>
            <p><strong>Order ID:</strong> ${state.receipt.id}</p>
            <p><strong>Description:</strong> ${state.receipt.description}</p>
            <p><strong>Total Cost:</strong> $${state.receipt.cost.toFixed(2)}</p>
            <button class="btn" id="go-back-btn">Place New Order</button>
        </div>
    `;
}


function ConfirmationPageEvents() {
    document.getElementById('go-back-btn').addEventListener('click', () => {
        state.beverage = null;
        state.condiments = [];
        state.receipt = null;
        loadPage('home');
    });
}
