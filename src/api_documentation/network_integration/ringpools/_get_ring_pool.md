**Examples**

Read a RingPool

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/ring_pools/<ring_pool_id_from_network>.json`

Response Code: 200

Response Body:

    {
      "id": "value",
      "id_from_network": "5432",
      "object_url": "https://invoca.net/a_campaigns/ring_pools/11",
      "preferred": true,
      "lifetime_seconds": 1800,
      "name": "value",
      "local_center": { "tn_prefix":"",
                        "zipcode": "90210",
                        "latitude": 30,
                        "longitude": -130 },
      "local_number_preferences": { "search_radius_miles": 20,
                                    "restrict_to_state": true,
                                    "allocation_fallback_strategy": "Wait" },
      "max_pool_size": 15,
      "api_key": "value",
      "destination_phone_number": "888-111-2222"
    }
