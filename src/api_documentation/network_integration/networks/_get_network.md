**Examples**

Read network and its users

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`

Format: application/json

Response Code: 200

Response Body:

    {
      "name": "Invoca",
      "users": [
        {
          "id_from_network": "549494858585cFUyYnFHyiYA42TrpM",
          "email_settings": [
            { "email_address": "chris@nfltix.com", "use_for_notifications": true }
          ],
          "first_name": "Chris",
          "last_name": "Dean",
          "phone_number": "800‐437‐7950",
          "role": "Manager",
          "oauth_refresh_token": "556588585858585858585858858",
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
        },
        {
          "id_from_network": "694940505055cFUyYnFHyiYA42TrpM",
          "email_address": "jim@nfltix.com",
          "first_name": "Jim",
          "last_name": "Williams",
          "phone_number": "800‐437‐7950",
          "role": "Observer"
          "oauth_refresh_token": "556588585858585858585858858",
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
    }
