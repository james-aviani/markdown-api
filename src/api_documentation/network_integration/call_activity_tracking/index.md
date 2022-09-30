Call Activity Tracking
======================

For full details on creating and updating campaigns via the API, see
`Advertiser Campaigns <../advertiser_campaigns/index>`.

Manage call activity tracking for campaigns
-------------------------------------------

Call activity tracking can be set for a campaign to determine whether or
not call activity should be tracked. The call activity will be tracked
if the full condition is met.

### Set Call Activity Tracking

To conditionally track call activity, set `"call_activity_tracking"` to
the tracking option you want.

POST

`https://invoca.net/api/@@CAMPAIGN_FEATURES_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

Example Request Body

    {
      "ivr_tree": {
        "call_activity_tracking": "NoTracking",
        "root": {
          "node_type": "Connect",
          "destination_phone_number": "8056173768",
          "destination_country_code": ""
        }
      }
    }

### Conditions

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr class="header">
<th>Option</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>NoTracking (Default)</td>
<td>Default is NoTracking. When set to NoTracking, no IVR or call activity data will be tracked during the call.</td>
</tr>
<tr class="even">
<td>PurgeActivityOnCallImport</td>
<td>When set to PurgeActivityOnCallImport, IVR and call activity data will be tracked during the call for use while the call is happening but will be purged when the call finishes.</td>
</tr>
<tr class="odd">
<td>SaveActivityOnCallImport</td>
<td>When set to SaveActivityOnCallImport, IVR and call activity data will be tracked during the call and will be saved in the Invoca platform after the call finishes.</td>
</tr>
</tbody>
</table>
