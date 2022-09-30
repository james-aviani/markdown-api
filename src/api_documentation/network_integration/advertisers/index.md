Advertisers
===========

The operations on Advertiser are similar to Network, in that the
interface is fully idempotent, and the create and update commands both
expect the full set of advertiser sites and users each time. You are not
allowed to delete an advertiser if it has one or more campaigns.

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
<td>id</td>
<td>integer (read-only)</td>
<td>The internal Invoca id for this Advertiser.</td>
</tr>
<tr class="even">
<td>id_from_network</td>
<td>string (required)</td>
<td>The network id for this Advertiser. Unique within network. Not required when auto-generation is enabled at network level.</td>
</tr>
<tr class="odd">
<td>name</td>
<td>string (required)</td>
<td>The name of the Advertiser. Unique within network.</td>
</tr>
<tr class="even">
<td>oauth_refresh_token</td>
<td>string</td>
<td>For internal use only.</td>
</tr>
<tr class="odd">
<td>approval_status</td>
<td>string (one of): Applied, Approved (default), Declined, Suspended, Archived</td>
<td>Approval status for this advertiser.</td>
</tr>
<tr class="even">
<td>web_integration_phone_number</td>
<td>string</td>
<td></td>
</tr>
<tr class="odd">
<td>default_creative_id_from_network</td>
<td>integer</td>
<td></td>
</tr>
<tr class="even">
<td>object_url</td>
<td>string (read-only)</td>
<td>URL for reaching the advertiser in the UI.</td>
</tr>
<tr class="odd">
<td><strong>sites</strong></td>
<td>json array of hashes</td>
<td>1 or more pairs of id_from_network [and name].</td>
</tr>
<tr class="even">
<td>id_from_network</td>
<td>integer site_id (PID)</td>
<td>The site_id (PID). At least one is required. The first becomes the default.</td>
</tr>
<tr class="odd">
<td>name</td>
<td>string</td>
<td>The site name that matches site_id.</td>
</tr>
<tr class="even">
<td><strong>users</strong></td>
<td>JSON array of hashes</td>
<td>0 or more users for the organization. Each must have first 5 fields below.</td>
</tr>
<tr class="odd">
<td>id_from_network</td>
<td>string</td>
<td>The network id for this User.</td>
</tr>
<tr class="even">
<td>email_settings</td>
<td>JSON array of hashes</td>
<td><p>Each hash has two required fields:</p>
<p><code>email_address</code>: string in RFC 2822 addr-spec format. The user’s email address. Unique for this user.</p>
<p><code>use_for_notifications</code>: boolean used to indicate if notifications should be sent to the email address.</p>
<p>A user must have at least one email address where <code>use_for_notifications</code> is true.</p></td>
</tr>
<tr class="odd">
<td>first_name</td>
<td>string (Required)</td>
<td>The user’s first name.</td>
</tr>
<tr class="even">
<td>last_name</td>
<td>string (Required)</td>
<td>The user’s last name.</td>
</tr>
<tr class="odd">
<td>contact_phone_number</td>
<td>string in ITU E.164 format or 10-digit US form (no punctuation)</td>
<td>The user’s phone number.</td>
</tr>
<tr class="even">
<td>oauth_refresh_token</td>
<td>string</td>
<td>Not used. Reserved.</td>
</tr>
<tr class="odd">
<td>role</td>
<td>One of: Super (default), Manager, Member, Observer</td>
<td>This user’s role in this organization. (A user may have different roles in different organizations)</td>
</tr>
<tr class="even">
<td>notify_on_budgets</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="odd">
<td>notify_on_campaign_applications</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="even">
<td>notify_on_campaign_expirations</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="odd">
<td>notify_on_creative_duplication_requests</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="even">
<td>notify_on_network_announcements</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="odd">
<td>notify_on_performance_notifications</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="even">
<td>notify_on_monthly_campaign_performance_reports</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="odd">
<td>notify_on_weekly_campaign_performance_reports</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="even">
<td>notify_on_call_activities</td>
<td>boolean, optional, defaults to false</td>
<td></td>
</tr>
<tr class="odd">
<td>can_login_via_platform</td>
<td>boolean (read-only)</td>
<td>Indicates if user can directly login with username and password. If false, the user is managed via SSO.</td>
</tr>
</tbody>
</table>

Custom Data
-----------

Advertisers may have Custom Data Fields applied to them, which will be
applied to calls originating through the advertiser. To apply Custom
Data Values to an advertiser, the top level parameter `custom_data`
should be assigned a hash with each pair's key corresponding to a
partner name. The value of the pair should be the value to be applied.

For the following example, we would apply the value "Offline newspaper"
to the Custom Data Field "channel".

    {
      "custom_data": {
        "channel": "Offline newspaper"
      }
    }

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>.json`
