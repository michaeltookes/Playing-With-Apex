import { LightningElement, track } from 'lwc';

export default class Tps_OrderPage extends LightningElement {

    @track inputSize = '';
    @track inputCrust = 'Regular';
    @track inputSauce = 'Marinara';
    @track inputTopping = '';

    @track result = 0;
    
    handleInputChange(event){

        const fieldName = event.target.name;
        console.log('Field Name: ' + fieldName);
        const value = event.target.value;
        console.log('Value: ' + value);

        if (fieldName === 'tps_Size__c') {
            this.result = this.calculateSizePrice(value);
            console.log('Result: ' + this.result);
        } else if (fieldName === 'tps_Crust__c') {
            // do something
        } else if (fieldName === 'tps_Sauce__c') {
            // do something
        } else if (fieldName === 'tps_Topping__c') {
            // do something
        }

    }

    calculateSizePrice(value) {
        let price = 0;

        if (value === 'Extra Large') {
            price = 12;
        } else if (value === 'Medium' || value === 'Large') {
            price = 10;
        } else if (value === 'Small') {
            price = 8;
        } else {
            price = 0;
        }
        return price;
    }

}