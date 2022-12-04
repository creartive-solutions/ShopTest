const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUi = document.querySelector('.basket-list')
const buyAllBtn = document.querySelector('.buy-all-in-basket')
const prodList = document.querySelector('.productsList')



const basket = new Basket();

const removeItem = (event) => {
 const id =  Number(event.target.dataset.id);
    basket.remove(id);
    createBasketUi();
}


//tworzenie w htmlu elemtnów koszyka
const createBasketUi = () => {
    basketUi.innerText = ' ' // czyścimy nowy koszyk przed aktualizacją


    for (const oneProductInfo of basket.getBasketSummary()) {
        const newLi = document.createElement('li');
        const btnRem = document.createElement('button');
        newLi.innerText = `${oneProductInfo.text}    `;
        btnRem.innerText = 'Usuń!';
        btnRem.addEventListener('click', removeItem);
        btnRem.dataset.id = oneProductInfo.id;
        newLi.appendChild(btnRem)
        basketUi.append(newLi)
        basket.saveToLocalStorage;
        //zapisanie listy zakuówp w LS
        //local storage ver 2

    }
    const basketTotalValue = basket.getTotalValue().toFixed(2);
    buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue}zł.`


    //wyświetlanie przycisku złóż zamówienie
    // if (basketTotalValue>0) {
    //     buyAllBtn.removeAttribute('disabled');
    // } else {
    //     buyAllBtn.setAttribute('disabled', 'true');
    // }
//druga opcja

    if (basketTotalValue > 0) {
        buyAllBtn.disabled = false;
    } else {
        buyAllBtn.disabled = true;
    }
};
    /// lub 3 wersja
    // buyAllBtn.disabled = basketTotalValue === 0;









//toFixed ilosc miejsc po przecinku

//funckja w której określamy zmiennną nazwy i ceny oraz tworzymy nowy produkt zaciągający do obiektu klasy dane
function addProductToBasket(event) {
    const name =  event.target.dataset.name;
    const price = Number(event.target.dataset.price);
    // console.log('drugi sposob', this.getAttribute('data-id'))
    const newProduct = new Product(name, price)  //tworzymy nowy produkt
   basket.add(newProduct); //pushujemy nowy produkt do koszyka
    createBasketUi();
}


//ver 1
for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToBasket)
}
//ver 2
// buyBtns.forEach(btn => {
//     btn.addEventListener('click', function (event) {
//         console.log('klik', event.target.dataset.id)
//     })
// })
//drugi sposób z this działa tylko kiedy użyjemy zamiast funkcji strzałkowej - funkcji klasycznej
// event.target + element na którym został wywołany event


// Kupowanie produktów i zerowanie koszyka
const buyAllProducts = () => {
    const basketTotalValue = basket.getTotalValue().toFixed(2);
    alert(`Kupiłeś produkty o wartości ${basketTotalValue}zł.`);
    basket.clear();
    createBasketUi();
};

buyAllBtn.addEventListener('click', buyAllProducts);
document.addEventListener('DOMContentLoaded', createBasketUi)
