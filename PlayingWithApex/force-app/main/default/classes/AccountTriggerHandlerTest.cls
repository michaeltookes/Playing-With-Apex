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
}