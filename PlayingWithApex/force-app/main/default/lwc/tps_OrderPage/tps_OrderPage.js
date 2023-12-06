import { LightningElement, track } from 'lwc';

export default class Tps_OrderPage extends LightningElement {

    @track inputSize = '';
    @track inputCrust = '';
    @track inputSauce = '';
    @track inputTopping = '';

    @track sizePrice = 0;
    @track crustPrice = 0;
    @track saucePrice = 0;
    @track toppingPrice = 0;

    @track result = 0;
    
    handleSizeChange(event){

        const size = event.target.value;
        console.log('Size: ' + size);
        this.sizePrice = this.calculateSizePrice(size);
        console.log('Size Price: ' + this.sizePrice);
        this.updateTotalPrice(this.sizePrice);

    }

    handleCrustChange(event) {

        const crust = event.target.value;
        console.log('Crust: ' + crust);
        this.crustPrice = this.calculateCrustPrice(crust);
        console.log('Crust Price: ' + this.crustPrice);
        this.updateTotalPrice(this.crustPrice);

    }

    handleSauceChange(event) {

        const sauce = event.target.value;
        console.log('Crust: ' + sauce);
        this.saucePrice = this.calculateSaucePrice(sauce);
        console.log('Sauce Price: ' + this.saucePrice);
        this.updateTotalPrice(this.saucePrice);

    }

    handleToppingChange(event) {

        const topping = event.target.value;
        console.log('Topping: ' + topping);
        this.toppingPrice = this.calculateToppingPrice(topping);
        console.log('Topping Price: ' + this.toppingPrice);
        this.updateTotalPrice(this.toppingPrice);

    }

    calculateSizePrice(size) {
        let price = 0;

        if (size === 'Extra Large') {
            price += 12;
        } else if (size === 'Medium' || size === 'Large') {
            price += 10;
        } else if (size === 'Small') {
            price += 8;
        } else {
            price = 0;
        }
        return price;
    }

    calculateCrustPrice(crust) {
        let price = 0;

        if (crust === 'Thin') {
            price += 1;
        } else if (crust === 'Stuffed') {
            price += 3;
        } else {
            price += 2;
        }
        return price;
        console.log('Price: ' + price);
    }

    calculateSaucePrice(sauce) {
        let price = 0;

        if (sauce === 'Alfredo') {
            price += 2;
        } else {
            price += 1;
        }
        return price;
    
    }

    calculateToppingPrice(topping) {
        let price = 0;

        if (topping === 'Pepperoni') {
            price += 3;
        } else if (topping === 'Sausage') {
            price += 4;
        } else {
            price += 2;
        }
        return price;
    
    }

    updateTotalPrice() {
        
        this.result = this.sizePrice + this.crustPrice + this.saucePrice + this.toppingPrice;
        console.log('Total Price: ' + this.result);
    }

}