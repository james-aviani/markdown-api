Networks
========

Network users are replicated to and retrieved from the Invoca Marketing
Automation Platform using this API.

The network interface is fully idempotent, and the create and update
commands both expect the full set of users each time. For instance, if
on one POST two users, <user1@invoca.com> and <user2@invoca.com> are
specified, but on the next POST, only <user1@invoca.com> is specified,
then as a result of that second post, <user2@invoca.com> will be
deleted. For this reason, POST and PUT requests are identical in their
effect, although they return 201 and 200 codes respectively for ease of
integration.

Parameters

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
<td>name</td>
<td>string</td>
<td>Network name (read only).</td>
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

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/network.json`
