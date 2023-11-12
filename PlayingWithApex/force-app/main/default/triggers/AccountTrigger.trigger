trigger AccountTrigger on Account (before insert, before update) {
	
    if(Trigger.isInsert) {
        AccountTriggerHandler.populateCustomerType(Trigger.new);
    }
    
    if(Trigger.isUpdate) {
        AccountTriggerHandler.highValueAccounts(Trigger.new, Trigger.oldMap);
    }
    
}