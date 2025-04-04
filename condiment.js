function CondimentPage() {
    return `
        <div class="container">
            <h2 style="text-align: center;">Add the condiments</h2>
            <div class="beverage-container">
                <button class="btn-beverage" data-condiment="Milk">Milk</button>
                <button class="btn-beverage" data-condiment="Mocha">Mocha</button>
                <button class="btn-beverage" data-condiment="Soy">Soy</button>
                <button class="btn-beverage" data-condiment="Whip">Whip</button>
            </div>

            <div id="order-summary">
                <h3>My Order:</h3>
                <p><span id="beverage-in-cart">${state.beverage}</span></p>
                <ul id="condiments-list">
                    ${state.condiments.map(condiment => `<li class="cart-item">${condiment}</li>`).join('')}
                </ul>

                <button class="btn" id="confirm-order-btn">Confirm Order</button>
            </div>
        </div>
    `;
}


function CondimentPageEvents() {

    const heading = document.querySelector('h2');
    heading.style.marginBottom = '20px';

    const container = document.querySelector('.container');
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between';
    container.style.alignItems = 'flex-start';
    container.style.gap = '40px';
    container.style.width = '80%';
    container.style.margin = '0 auto';


    const beverageContainer = document.querySelector('.beverage-container');
    beverageContainer.style.flex = '1';
    beverageContainer.style.display = 'flex';
    beverageContainer.style.flexDirection = 'column';
    beverageContainer.style.alignItems = 'center';
    beverageContainer.style.gap = '20px';


    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'grid';
    btnGroup.style.gridTemplateColumns = 'repeat(2, 1fr)';
    btnGroup.style.gap = '20px';

    document.querySelectorAll('.btn-beverage').forEach(button => {
        btnGroup.appendChild(button);
    });


    beverageContainer.appendChild(btnGroup);


    const orderSummary = document.getElementById('order-summary');
    orderSummary.style.flex = '1';
    orderSummary.style.display = 'flex';
    orderSummary.style.flexDirection = 'column';
    orderSummary.style.padding = '20px';
    orderSummary.style.border = '2px solid #ccc';
    orderSummary.style.borderRadius = '10px';
    orderSummary.style.backgroundColor = 'transparent';
    orderSummary.style.textAlign = 'left';
    orderSummary.style.height = 'auto';


    document.querySelectorAll('.btn-beverage').forEach(button => {
        button.addEventListener('click', () => {
            const condiment = button.getAttribute('data-condiment');


            if (!state.condiments.includes(condiment)) {
                state.condiments.push(condiment);
            } else {

                state.condiments = state.condiments.filter(c => c !== condiment);
            }

            loadPage('condiment');
        });
    });


    document.getElementById('beverage-in-cart').addEventListener('click', () => {
        // Clear the beverage and condiments, go back to beverage page
        state.beverage = '';
        state.condiments = [];
        loadPage('beverage');
    });


    document.querySelectorAll('.cart-item').forEach(item => {
        item.addEventListener('click', () => {
            const condiment = item.innerText;


            state.condiments = state.condiments.filter(c => c !== condiment);
            loadPage('condiment');
        });
    });

    document.getElementById('confirm-order-btn').addEventListener('click', () => {
        loadPage('confirmation');
    });
}
