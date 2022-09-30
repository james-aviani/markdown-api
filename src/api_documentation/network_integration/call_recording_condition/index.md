Call Recording Condition
========================

Manage call recording conditions for campaigns
""""""""""""""""""""""""""""""""""""""""""""

A call recording condition can be set for a campaign to determine
whether or not the call should be recorded. The call will be recorded if
the full condition is met.

Set Call Recording Condition
----------------------------

To conditionally record calls, set `"record_calls"` to `true` and set
`"call_recording_condition"` to the expression you want to evaluate.

POST

`https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

Example Request Body

    {
      "ivr_tree": {
        "record_calls": true,
        "call_recording_condition": "during_hours and repeat",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }

Record All Calls
----------------

To record all calls (and to remove an existing call recording
condition), set `"record_calls"` to `true` and set
`"call_recording_condition"` to empty string `""`.

POST

`https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

Example Request Body

    {
      "ivr_tree": {
        "record_calls": true,
        "call_recording_condition": "",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }

Record No Calls
---------------

To record no calls (and to remove an existing call recording condition),
set `"record_calls"` to `false` and set `"call_recording_condition"` to
empty string `""`.

(If `"record_calls"` is `false`, no calls will be recorded even if there
is a `"call_recording_condition"` set.)

POST

`https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

Example Request Body

    {
      "ivr_tree": {
        "record_calls": false,
        "call_recording_condition": "",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }

Conditions
----------

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 45%" />
<col style="width: 27%" />
</colgroup>
<thead>
<tr class="header">
<th>Condition</th>
<th>Details</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>during_hours</td>
<td>True if the caller is calling during the hours specified in the campaign.</td>
<td>during_hours</td>
</tr>
<tr class="even">
<td>repeat</td>
<td>True if the caller has already called this campaign in the last N days (the interval N can be set on the campaign; the default is 30 days).</td>
<td>repeat</td>
</tr>
<tr class="odd">
<td>landline</td>
<td>True if the caller is calling from a landline phone.</td>
<td>landline</td>
</tr>
<tr class="even">
<td>mobile</td>
<td>True if the caller is calling from a mobile phone.</td>
<td>mobile</td>
</tr>
<tr class="odd">
<td>pressed[key]</td>
<td>True if the caller pressed the key. Supported characters (case sensitive): [1-9, a-z, W, N]. For a sub-menu keypress, join characters in their expected order with spaces (e.g. 1 1 2).</td>
<td>pressed[3]</td>
</tr>
<tr class="even">
<td>custom_data[field_partner_name]</td>
<td><ul>
<li>True if the custom data field value matches (=) the expected value</li>
<li>True if the custom data field value does not match (!=) the expected value</li>
<li>True if the custom data field value contains (contains) the expected value</li>
<li>True if the custom data field value is present (present)</li>
</ul></td>
<td><ul>
<li>custom_data[product] = "Printer"</li>
<li>custom_data[product] != "Fax Machine"</li>
<li>custom_data[product] contains "Chair"</li>
<li>custom_data[product] present</li>
</ul></td>
</tr>
<tr class="odd">
<td>affiliate_name</td>
<td><ul>
<li>True if the affiliate name value matches (=) the expected value</li>
<li>True if the affiliate name value does not match (!=) the expected value</li>
<li>True if the affiliate name value contains (contains) the expected value</li>
<li>True if the affiliate name value is present (present)</li>
</ul></td>
<td><ul>
<li>affiliate_name = "Captain Crunch Publishing"</li>
<li>affiliate_name != "Count Chocula Publishing"</li>
<li>affiliate_name contains "Cocoa"</li>
<li>affiliate_name present</li>
</ul></td>
</tr>
<tr class="even">
<td>media_type</td>
<td><ul>
<li>True if the media type for the promo number called matches (=) the expected value</li>
<li>True if the media type for the promo number called does not match (!=) the expected value</li>
<li>True if the media type for the promo number called contains (contains) the expected value</li>
<li>True if the media type for the promo number called is present (present)</li>
</ul></td>
<td><ul>
<li>media_type = "Online: Content / Review Site"</li>
<li>media_type != "Online: Email"</li>
<li>media_type contains "Online"</li>
<li>media_type present</li>
</ul></td>
</tr>
<tr class="odd">
<td>promo_number_description</td>
<td><ul>
<li>True if the description for the promo number called matches (=) the expected value</li>
<li>True if the description for the promo number called does not match (!=) the expected value</li>
<li>True if the description for the promo number called contains (contains) the expected value</li>
<li>True if the description for the promo number called is present (present)</li>
</ul></td>
<td><ul>
<li>promo_number_description = "Very important number"</li>
<li>promo_number_description != "Old marketing number"</li>
<li>promo_number_description contains "New ad campaign"</li>
<li>promo_number_description present</li>
</ul></td>
</tr>
<tr class="even">
<td>and</td>
<td>Joins two conditions and is true if both conditions are true.</td>
<td>repeat and during_hours</td>
</tr>
<tr class="odd">
<td>or</td>
<td>Joins two conditions and is true if either condition is true.</td>
<td>repeat or during_hours</td>
</tr>
<tr class="even">
<td>not</td>
<td>Inverts the following condition.</td>
<td>not during_hours</td>
</tr>
<tr class="odd">
<td>( )</td>
<td>Used for grouping.</td>
<td>mobile and (repeat or during_hours)</td>
</tr>
</tbody>
</table>

Note that **and** is higher precedence than **or**. So if you use both
in a condition like this:

    mobile or repeat and during_hours

it is equivalent to this:

    mobile or (repeat and during_hours)
