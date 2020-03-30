//-----------------------------------
//  Caio Augusto e Kennedy Reis Script
//-----------------------------------
function main() 
{
    // Vai pegar todos os grupos que estão ligados //Let's start by getting all of the adGroups that are active
    var camp_iter = AdWordsApp
        .campaigns()
        .withCondition("Status = ENABLED")
        .forDateRange("TODAY")
        .withCondition("Ctr < 1")
        .withCondition("CampaignName CONTAINS_IGNORE_CASE 'MKT_begamer'")
        .get();

    while (camp_iter.hasNext()) 
    {
        var ag = camp_iter.next();

        var ad_iter = ag.adGroups()
            .forDateRange("TODAY")
            .withCondition("Ctr < 0.01")
            .withCondition("Status = ENABLED")
            .get();
            
        var ad_array = new Array();
        while (ad_iter.hasNext()) 
        {
            ad_array.push(ad_iter.next());
        }
        if (ad_array.length >= 1) 
        {
            for (var i = 0; i < ad_array.length; i++) 
            {
                ad_array[i].pause(); //or .remove(); to delete them 
            }
        }

    }
}