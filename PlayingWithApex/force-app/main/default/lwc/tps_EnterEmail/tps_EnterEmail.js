import { LightningElement, track } from 'lwc';
import lookupByEmail from '@salesforce/apex/tps_CustomerFinder.lookupByEmail';

export default class Tps_EnterEmail extends LightningElement {

    @track email = '';
    @track customer;
    @track error;

    handleInputChange(event) {
        this.email = event.target.value;
    }

    handleSearch() {
        lookupByEmail({ email: this.email})
            .then(result => {
                this.customer = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error.message;
                this.customer = undefined;
            });
    }

}