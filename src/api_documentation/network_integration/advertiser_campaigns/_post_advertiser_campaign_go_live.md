**Examples**

Advertiser campaigns can have their state controlled through this API.
When a campaign is created through the API, its “future terms” are being
set, and its state is not yet live. When the go\_live endpoint is hit,
the “future terms” are promoted to “current terms” and the campaign
becomes live. Archived campaigns must be unarchived before calling this
endpoint to make them live.

Use this request url format:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/go_live.json`

    curl­ -XPOST­ -H "Content­Type: application/json"­ -u 'login:pass'
    'https://vanity.invoca.net/api/@@NETWORK_API_VERSION/123/advertisers/advertiser_id/advertiser_campaigns/445566/go_live.json' \
    -d '
    {
      "timeout": 10
    }
    ' -v
