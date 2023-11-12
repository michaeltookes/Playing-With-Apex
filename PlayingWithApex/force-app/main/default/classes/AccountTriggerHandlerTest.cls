@isTest
public class AccountTriggerHandlerTest {

    @testSetup static void setupMethod() {
        // Create an Account record
        Account acc = new Account();
        acc.Name = 'Salesforce';
        insert acc;
    }
    
    @isTest
    static void testPopulateCustomerType() {
        Account acc = [SELECT Id, Name, Type
               		   FROM Account
               		   WHERE Name = 'Salesforce'][0];
        
        Assert.areEqual(acc.Type == 'Prospect', acc.Type == 'Prospect', 'Values match!');
    }

    @isTest
    static void testHighValueAccounts(){
        Account acc = [SELECT Id, Name, Type, AnnualRevenue, Description
               		   FROM Account
               		   WHERE Name = 'Salesforce'][0];

        acc.AnnualRevenue = 5000000;
        update acc;
        
        Assert.areEqual(acc.Description == 'High Value Accounts', acc.Description == 'High Value Accounts', 'Values Match');
    }
}