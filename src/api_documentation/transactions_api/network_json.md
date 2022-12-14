
## Summary
Returns a JSON array of transaction objects. 

GET <code>https://{NETWORK NAME}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.json</code>

## Example Request/Response

<code>GET https://pup.invoca.net/api/2020-10-01/networks/transactions/1997.json?oauth_token=XXXXXXXXXXXXX</code>

    [
        {
            "transaction_id": "31816BCB-EE9B051D",
            "corrects_transaction_id": null,
            "transaction_type": "Call",
            "original_order_id": "31816BCB-EE9B051D",
            "advertiser_id": "190774",
            "advertiser_id_from_network": "190774",
            "advertiser_name": "Default",
            "advertiser_campaign_id": "3532988",
            "advertiser_campaign_id_from_network": "3532988",
            "advertiser_campaign_name": "Testing API signals & marketing fields",
            "affiliate_id": "",
            "affiliate_id_from_network": "",
            "affiliate_name": "",
            "affiliate_commissions_ranking": "0",
            "affiliate_call_volume_ranking": "0",
            "affiliate_conversion_rate_ranking": "0",
            "media_type": "Online: Content / Review Site",
            "call_source_description": "888-816-0592",
            "promo_line_description": "",
            "virtual_line_id": "18183951",
            "call_result_description_detail": "Profile Promo Number",
            "call_fee_localized": "0.00",
            "advertiser_call_fee_localized": "0.00",
            "city": "Glenwood Springs",
            "qualified_regions": "any",
            "repeat_calling_phone_number": "No",
            "calling_phone_number": "970-379-2924",
            "mobile": "Mobile",
            "duration": 7,
            "connect_duration": 7,
            "ivr_duration": 0,
            "keypresses": "",
            "keypress_1": "",
            "keypress_2": "",
            "keypress_3": "",
            "keypress_4": "",
            "dynamic_number_pool_referrer_search_engine": null,
            "dynamic_number_pool_referrer_search_keywords": "",
            "dynamic_number_pool_referrer_param1_name": null,
            "dynamic_number_pool_referrer_param1_value": null,
            "dynamic_number_pool_referrer_param2_name": null,
            "dynamic_number_pool_referrer_param2_value": null,
            "dynamic_number_pool_referrer_param3_name": null,
            "dynamic_number_pool_referrer_param3_value": null,
            "dynamic_number_pool_referrer_param4_name": null,
            "dynamic_number_pool_referrer_param4_value": null,
            "dynamic_number_pool_referrer_param5_name": null,
            "dynamic_number_pool_referrer_param5_value": null,
            "dynamic_number_pool_referrer_param6_name": null,
            "dynamic_number_pool_referrer_param6_value": null,
            "dynamic_number_pool_referrer_param7_name": null,
            "dynamic_number_pool_referrer_param7_value": null,
            "dynamic_number_pool_referrer_param8_name": null,
            "dynamic_number_pool_referrer_param8_value": null,
            "dynamic_number_pool_referrer_param9_name": null,
            "dynamic_number_pool_referrer_param9_value": null,
            "dynamic_number_pool_referrer_param10_name": null,
            "dynamic_number_pool_referrer_param10_value": null,
            "dynamic_number_pool_referrer_search_type": null,
            "dynamic_number_pool_pool_type": null,
            "dynamic_number_pool_id": null,
            "start_time_local": "2021-09-28 11:50:54 -07:00",
            "start_time_xml": "2021-09-28T11:50:54",
            "start_time_utc": 1632855054945,
            "start_time_network_timezone": "2021-09-28 12:50:54 -06:00",
            "start_time_network_timezone_xml": "2021-09-28T12:50:54",
            "recording": null,
            "corrected_at": null,
            "opt_in_SMS": 0,
            "complete_call_id": "3B81-6BEEE19C255F",
            "transfer_from_type": "Profile Direct",
            "notes": "",
            "verified_zip": "",
            "hangup_cause": "Caller: Hang-up",
            "signal_name": "",
            "signal_partner_unique_id": "",
            "signal_occurred_at": "2021-09-28 11:50:54",
            "signal_source": "",
            "reason_code": "",
            "email_address": "",
            "name": "",
            "address1": "",
            "address2": "",
            "order_city": "",
            "state_or_province": "",
            "zip_code": "",
            "country": "",
            "home_phone_number": "",
            "cell_phone_number": "",
            "sku_list": "",
            "quantity_list": "",
            "revenue": null,
            "sale_amount": null,
            "call_center_call_id": null,
            "destination_phone_number": "800-738-1560"
        }

{{#include _errors.md}}

{{#include network_query_params_non_csv.md}}

## Constants

{{#include _intro_constants.md}}

{{#include _marketing_data_params.md}}