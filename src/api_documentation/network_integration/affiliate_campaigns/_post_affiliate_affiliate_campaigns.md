**Examples**

Create Affiliate Campaign with status for Advertiser 354 Campaign 12 to
Affiliate 975

Please note - The Network Integration API only provides the ability to
create an affiliate campaign with status “Applied”. If the Advertiser
Campaign is set to “Approve All”, the campaign will automatically
transition to “Approved”.

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/12/affiliates/975/affiliate_campaigns.json`

Format: application/json

Request Body:

    {
      "status": "Applied",
      "id_from_network": "2234",
      "custom_data": {
        "channel": "Offline lead"
      }
    }

Response Body:

Same as a GET response, includes all the affiliate campaign properties.

<hr>

Not Found - 404

Endpoint:

`https://invoca.net/api/api/@@NETWORK_API_VERSION/<network_id>/advertisers/354/advertiser_campaigns/13/affiliates/976/affiliate_campaigns.json`

Format: application/json

Request Body:

    {
      "status": "Approved"
    }

Response Code: 403

Response Body:

    {
      "errors": {
        "status": [
          "cannot transition from 'Approved'"
        ]
      },
      "status": "Applied"
    }
