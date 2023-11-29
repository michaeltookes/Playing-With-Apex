public with sharing class tps_CustomerFinder {
    
    @AuraEnabled(cacheable=true)
    public static Contact lookupByEmail(String email) {
        Contact customer = [SELECT Id, Name, Phone, Email, MailingStreet, MailingCity, MailingState, MailingPostalCode, AccountId
                            FROM Contact
                            WHERE Email =: email][0];
        return customer;

    } 
    
}