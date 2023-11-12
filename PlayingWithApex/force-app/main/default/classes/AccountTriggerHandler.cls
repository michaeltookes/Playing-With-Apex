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

    /* If an account is updated to have an Annual Revenue greater than or equal to 5 million dollars;
    then update the Description to read, "High Value Customer." */
    
    public static void highValueAccounts(List<Account> accList, Map<Id, Account> oldMap) {

        List<Account> highValueAccountsCollection = new List<Account>();

        for (Account acc : accList) {
            
            Account oldAccount = oldMap.get(acc.Id);

            if (oldAccount.AnnualRevenue != acc.AnnualRevenue && acc.AnnualRevenue != null && acc.AnnualRevenue >= 5000000) {
                acc.Description = 'High Value Account';
            }
            highValueAccountsCollection.add(acc);
        }
    }
}