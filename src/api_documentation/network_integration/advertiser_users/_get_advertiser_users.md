**Examples**

Read all advertiser users for advertiser e0Fv6YEk

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/e0Fv6YEk/users.json`

Format: application/json

Response Code: 200

Response Body:

    [
      {
        "email_settings": [
          { "email_address": "chris@nfltix.com", "use_for_notifications": true }
        ],
        "id_from_network": "549494858585Dxlj2uCX0ijqXP4nAW",
        "first_name": "Chris",
        "contact_country_code": "1",
        "last_name": "Dean",
        "role": "Manager",
        "oauth_refresh_token": "556588585858585858585858858",
        "contact_phone_number": "888-603-3760",
        "notify_on_budgets": true,
        "notify_on_campaign_applications": false,
        "notify_on_campaign_expirations": false,
        "notify_on_creative_duplication_requests": true,
        "notify_on_network_announcements": true,
        "notify_on_performance_notifications": false,
        "notify_on_monthly_campaign_performance_reports": true,
        "notify_on_weekly_campaign_performance_reports": false,
        "notify_on_call_activities": true,
        "can_login_via_platform": false
      }
    ]
