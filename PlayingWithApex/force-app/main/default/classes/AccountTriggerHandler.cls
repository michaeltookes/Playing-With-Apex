/* Author: Michael Tookes
   Description: Making simple classes to practice writing proper unit tests
*/

public with sharing class AccountTriggerHandler {
    // If an Account is created without a 'Type;' update the field to 'Prospect.'
    
    public static void populateCustomerType(List<Account> accList) {
        
        List<Account> accountsWithoutTypeCollection = new List<Account>();

        for (Account acc : accList) {
            if (acc.Type == null) {
                acc.Type = 'Prospect';
            }
            accountsWithoutTypeCollection.add(acc);
        }
    }
}