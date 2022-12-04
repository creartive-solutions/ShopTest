
//koszyk który zbiera produkty


class Basket {

    constructor() {
        this.items = this.loadFromLocalStorage();


        //jeśli użyć operator trójargumentu
        //const ls=this.loadFromLocalStorage();
        //this.items = ls ? ls : []
        //jeśli ls będzie miał zawartość (true) to uzyc ls, jeśli null to pusta tablica
        //ver 3 - this.items = this.loadFromLocalStorage() ?? [];  ?? null checker
}
        //lista jest zawsze sciagnieta z local storage


    add(item) {
        this.items.push(item);
        this.saveToLocalStorage()
    }
    getTotalValue() {
        return this.items.reduce((prev, product) => prev + product.price, 0)
    }
    getBasketSummary() {
        return this.items
            .map((product, i)=> {
                return {
                    id: i+1,
                    text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`,
    };});};


    remove(no) {
        this.items.splice((no-1), 1);
        this.saveToLocalStorage()
    }

    clear() {
this.items = [];
localStorage.removeItem('basket-items')
// this.items.lenght = 0;
// this.items.splice(0)
    }

    saveToLocalStorage() {
localStorage.setItem('basket-items', JSON.stringify(this.items))
    }

    loadFromLocalStorage() {
        const localBasket = localStorage.getItem('basket-items');
        if (localBasket===null){
            return []
        }else {
            return JSON.parse(localBasket)
        }
    }
}

//alternative load
//return JSON.parse(localStorage.getItem('basket-items'))


//klasa produktu dodawanego do koszyka
class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }
//bez użycia na ten moment
    setNewPrice(newPrice) {
        this.price = newPrice
    }
}
