Calls In Progress API =================

<div class="alert alert-warning">
  <b>Notice:</b>
  The CallsInProgress API is in beta. Please contact your CSM or the support team to request access.
</div>

The Calls In Progress API is accessible using the API credentials
generated on the platform.

Find Calls in Progress ------------------Query current calls in progress
for a given organization.

Supported types of requests: <span class="title-ref">GET</span>

Query Parameters
================

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr class="header">
<th>Param</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>The ID of the organization to be used in the request</td>
<td>Number</td>
<td>True</td>
</tr>
<tr class="even">
<td>organization_type</td>
<td>The type of organization to be used in the request. Available types: [network, advertiser]</td>
<td>String</td>
<td>True</td>
</tr>
<tr class="odd">
<td>transaction_id</td>
<td>Unique transaction ID</td>
<td>String</td>
<td>Optional</td>
</tr>
<tr class="even">
<td>external_unique_id</td>
<td>Unique ID for call from external system</td>
<td>String</td>
<td>Optional</td>
</tr>
<tr class="odd">
<td>calling_phone_number</td>
<td>The caller's caller ID</td>
<td>We support most phone number formats, for example: 800-555-1234, 8005551234, +18005551234, or 18005551234</td>
<td>Yes, if request includes destination_phone_number</td>
</tr>
<tr class="even">
<td>destination_phone_number</td>
<td>The phone number the call was transferred to</td>
<td>We support most phone number formats, for example: 800-555-1234, 8005551234, +18005551234, or 18005551234</td>
<td>Yes, if request includes calling_phone_number</td>
</tr>
</tbody>
</table>

Examples
========

Update a Call in Progress -----------------Update certain aspects of a
Call that is currently in progress

Supported types of requests: <span class="title-ref">PUT</span> and
<span class="title-ref">POST</span>

Query Parameters
================

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr class="header">
<th>Param</th>
<th>Description</th>
<th>Format</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>The ID of the organization to be used in the request</td>
<td>Number</td>
<td>True</td>
</tr>
<tr class="even">
<td>organization_type</td>
<td>The type of organization to be used in the request. Available types: [network, advertiser]</td>
<td>String</td>
<td>True</td>
</tr>
<tr class="odd">
<td>transaction_id</td>
<td>Unique transaction ID</td>
<td>String</td>
<td>Optional, if using external_unique_id</td>
</tr>
<tr class="even">
<td>external_unique_id</td>
<td>Unique ID for call from external system</td>
<td>String</td>
<td>Optional, if using transaction_id</td>
</tr>
</tbody>
</table>

Fields Available for Updates
============================

<span class="title-ref">external\_unique\_id</span>

<span class="title-ref">custom\_data</span> (additions/updates only, no
removal)

Examples
========
