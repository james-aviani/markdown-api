Affiliate Campaigns
===================

Affiliate Campaign status can be replicated using this API. You are not
allowed to delete affiliate campaigns.

Relationship properties are shown below

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 40%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr class="header">
<th>Property</th>
<th>Type</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>affiliate_id_from_network</td>
<td>string (read only)</td>
<td>Network specific id of the affiliate.</td>
</tr>
<tr class="even">
<td>status</td>
<td>string (read and write)</td>
<td>One of: Applied, Approved, Suspended, Declined.</td>
</tr>
<tr class="odd">
<td>id</td>
<td>integer (read-only)</td>
<td>The internal Invoca id of the affiliate campaign.</td>
</tr>
<tr class="even">
<td>id_from_network</td>
<td>string (read and write)</td>
<td>Network specific id of the affiliate campaign.</td>
</tr>
<tr class="odd">
<td>max_promo_numbers</td>
<td>integer (read only)</td>
<td>Promo number limit.</td>
</tr>
<tr class="even">
<td>object_url</td>
<td>string (read-only)</td>
<td>URL for reaching the affiliate campaign in the UI.</td>
</tr>
<tr class="odd">
<td>current_terms</td>
<td>(read only)</td>
<td></td>
</tr>
<tr class="even">
<td><strong>advertiser_payin</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>max</td>
<td>decimal</td>
<td>Maximum payin amount (base + bonuses).</td>
</tr>
<tr class="even">
<td>min</td>
<td>decimal</td>
<td>Minimum payin amount (base).</td>
</tr>
<tr class="odd">
<td>pricing</td>
<td>string</td>
<td>Human‐friendly representation of the payin pricing (eg. “$5.07 per call”).</td>
</tr>
<tr class="even">
<td>currency</td>
<td>string</td>
<td>USD, GBP, EUR.</td>
</tr>
<tr class="odd">
<td>range</td>
<td>string</td>
<td>Formatted string including min and max payin values.</td>
</tr>
<tr class="even">
<td><strong>policies</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>amount</td>
<td>decimal</td>
<td>Payin policy amount.</td>
</tr>
<tr class="even">
<td>currency</td>
<td>string</td>
<td>USD, GBP, EUR.</td>
</tr>
<tr class="odd">
<td>type</td>
<td>string</td>
<td>Base, Bonus.</td>
</tr>
<tr class="even">
<td>condition</td>
<td>string</td>
<td>Condition options used to determine the base or bonus payout (eg. “duration &gt;= 1 min 30 sec”).</td>
</tr>
<tr class="odd">
<td>pricing_type</td>
<td>string</td>
<td>Fixed, OverallMargin, IndividualMargin.</td>
</tr>
<tr class="even">
<td>ivr_tree</td>
<td>hash</td>
<td>Interactive Voice Response tree.</td>
</tr>
<tr class="odd">
<td><strong>affiliate_payout</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>max</td>
<td>decimal</td>
<td>Maximum payout amount (base + bonuses).</td>
</tr>
<tr class="odd">
<td>min</td>
<td>decimal</td>
<td>Minimum payout amount (base).</td>
</tr>
<tr class="even">
<td>pricing</td>
<td>string</td>
<td>Human‐friendly representation of the payout pricing (eg. “$5.07 per call”).</td>
</tr>
<tr class="odd">
<td>currency</td>
<td>string</td>
<td>USD, GBP, EUR.</td>
</tr>
<tr class="even">
<td>range</td>
<td>string</td>
<td>Formatted string including min and max payin values policies.</td>
</tr>
<tr class="odd">
<td><strong>policies</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>amount</td>
<td>decimal</td>
<td>Payout policy amount.</td>
</tr>
<tr class="odd">
<td>currency</td>
<td>string</td>
<td>USD, GBP, EUR.</td>
</tr>
<tr class="even">
<td>type</td>
<td>string</td>
<td>Base, Bonus.</td>
</tr>
<tr class="odd">
<td>condition</td>
<td>string</td>
<td>Condition options used to determine the base or bonus payout (eg. “duration &gt;= 1 min 30 sec”).</td>
</tr>
</tbody>
</table>

Custom Data
-----------

Affiliate campaigns may have Custom Data Fields applied to them, which
will be applied to calls originating through the affiliate campaign. To
apply Custom Data Values to an affiliate campaign, the top level
parameter `custom_data` should be assigned a hash with each pair's key
corresponding to a partner name. The value of the pair should be the
value to be applied.

For the following example, we would apply the value "Offline newspaper"
to the Custom Data Field "channel".

    {
      "custom_data": {
        "channel": "Offline newspaper"
      }
    }

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>/affiliates/<affiliate_id_from_network>/affiliate_campaigns.json`
