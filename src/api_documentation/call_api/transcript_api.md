Transcripts
===========

URL
---

The API follows REST conventions. Perform an HTTPS GET to the URL with
the format in which you’d like to receive data. The following response
formats are supported, where CUID-33 is the call record id.

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr class="header">
<th>Format</th>
<th>Description and URL</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>json (default)</td>
<td>Returns a JSON array of the transcript. <span class="title-ref">https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=agent</span></td>
</tr>
</tbody>
</table>

Authentication
--------------

The API uses OAuth to validate access. The OAuth Token can be passed in
two ways. The first way is to pass the OAuth Token in the header of the
request. The second is to pass the OAuth Token like any other query
parameter. Please note that the OAuth Token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page.

Query Parameters
----------------

The API takes the following optional query parameters:

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr class="header">
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>transcript_format= (required)</td>
<td>Determines what format the transcripts are returned as, see response parameters below for information on each format.</td>
</tr>
</tbody>
</table>

Response
--------

Endpoint:

`https://mynetwork.invoca.net/call/transcript/<call_record_id>?transcript_format=<format>`
