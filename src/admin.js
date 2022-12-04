const addProductForm = document.querySelector('.form-add-product');

const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');

// posubmicie z palca nie przeladowuje sie strona

const saveProductsToLocalStorage = (name, price) => {
    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? []
    productsList.push({name, price}); //{} skrtowy zapis obiektu name:name,price:price
    localStorage.setItem('shop-products', JSON.stringify(productsList))
};


const addProductToShop = (name, price) => {

    const newLi = document.createElement('li')
    // newLi.innerHtml = `<strong>${name}</strong> - ${price}  <button class="btn-buy-product" data-id="" data-name="${name}" data-price="${price}">Kupuj!</button>`;

    const newStrong = document.createElement('strong');
    newStrong.innerText = name;
    const newPriceText = document.createTextNode(` - ${price.toFixed(2)}  `)

    const buyBtn = document.createElement('button')
    buyBtn.innerText='Kupuj!'
    buyBtn.classList.add('.btn-buy-product')
    buyBtn.setAttribute('data-name', name);
    buyBtn.setAttribute('data-price', String(price));
    buyBtn.setAttribute('data-id', 'new');
    buyBtn.addEventListener('click', addProductToBasket)

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText)
    newLi.appendChild(buyBtn)

prodList.appendChild(newLi);
    document.prodAdder.reset();


}

const loadProcuctsFromLocalStorage = () => {

   const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? []

    for (const {name, price} of productsList) {
        addProductToShop(name, price)
    }

}

const handleAddProductFromSubmit = event => {
    event.preventDefault();

    const nameFromForm = nameInput.value;
    const priceFromForm = Number(priceInput.value);

    addProductToShop(nameFromForm, priceFromForm);
    saveProductsToLocalStorage(nameFromForm, priceFromForm);
}

addProductForm.addEventListener('submit', handleAddProductFromSubmit);

loadProcuctsFromLocalStorage()
