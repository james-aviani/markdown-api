**Examples**

Update Affiliate Campaign status for Advertiser 354 Campaign 12 to
Affiliate 976

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/976/affiliate_campaigns.json`

Format: application/json

Request Body:

    {
      "status": "Approved"
    }

Response Body:

Same as a GET response, includes all the affiliate campaign properties.
