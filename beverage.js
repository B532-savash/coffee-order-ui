function BeveragePage() {
    return `
        <div class="container">
            <h2 style="text-align: center;">Select the beverage</h2>
            <div class="beverage-container">
                <button class="btn-beverage" data-beverage="Dark Roast">Dark Roast</button>
                <button class="btn-beverage" data-beverage="Espresso">Espresso</button>
                <button class="btn-beverage" data-beverage="House Blend">House Blend</button>
                <button class="btn-beverage" data-beverage="Decaf">Decaf</button>
            </div>
        </div>
    `;
}


function BeveragePageEvents() {
    document.querySelector('h2').style.marginBottom = '50px';
    document.querySelectorAll('.btn-beverage').forEach(button => {
        button.addEventListener('click', () => {
            state.beverage = button.getAttribute('data-beverage');
            loadPage('condiment');
        });
    });
}
