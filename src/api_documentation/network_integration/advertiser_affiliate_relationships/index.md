Auto-Approve Affiliate to Campaigns ==================================

Changes to the Relationship between Advertiser and Affiliate on the
network platform are replicated to the Invoca platform using this API.
The operations on Advertiser‐Affiliate Relationships are similar to
Network, in that the interface is fully idempotent, and the create and
update commands will act as “create or update”.

When setting the Relationship between an Advertiser and Affiliate to
Approved, all current and future campaign applications made between the
Affiliate and Advertiser will be auto-approved. If the Relationship is
set to any status other than Approved, all current and future
applications will be declined and any active affiliate campaigns will be
suspended.

Relationship status is set individually but reading is available for one
or all relationships for an advertiser.

Parameters for the relationships are shown below

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
<td>string</td>
<td>The network id for the affiliate. (read only)</td>
</tr>
<tr class="even">
<td>status</td>
<td>One of: Pending, Approved, Suspended, Declined, Deactivated</td>
<td>Status of the advertiser ‐ affiliate relationship.</td>
</tr>
</tbody>
</table>

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/affiliates/<affiliate_id_from_network>.json`
