<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 10%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Name in Reports</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>advertiser_call_fee_localized</td>
<td>Advertiser Fees</td>
<td>Advertiser Telecommunications fee associated with transaction</td>
</tr>
<tr class="even">
<td>advertiser_campaign_id</td>
<td>Advertiser Campaign ID (Invoca ID)</td>
<td>The Invoca identifier of the campaign.</td>
</tr>
<tr class="odd">
<td>advertiser_campaign_id_from_network</td>
<td>Advertiser Campaign ID</td>
<td>The Campaign ID from the network as set on the advertiser campaign.</td>
</tr>
<tr class="even">
<td>advertiser_campaign_name</td>
<td>Advertiser Campaign</td>
<td>Name of the campaign.</td>
</tr>
<tr class="odd">
<td>advertiser_campaign_country</td>
<td>Advertiser Campaign Country</td>
<td>Country of the campaign.</td>
</tr>
<tr class="even">
<td>advertiser_id</td>
<td>Advertiser ID (Invoca ID)</td>
<td>The Invoca identifier of the advertiser</td>
</tr>
<tr class="odd">
<td>advertiser_id_from_network</td>
<td>Advertiser ID</td>
<td>Advertiser ID from the network as set on the Invoca advertiser.</td>
</tr>
<tr class="even">
<td>advertiser_name</td>
<td>Advertiser</td>
<td>Name of the advertiser.</td>
</tr>
<tr class="odd">
<td>advertiser_payin_localized</td>
<td>Earned</td>
<td>Amount paid in by advertiser</td>
</tr>
<tr class="even">
<td>affiliate_call_volume_ranking</td>
<td>Affiliate Volume Ranking</td>
<td>Network ranking of affiliate's call volume (0 to 5, and -1 being 'new'). Blank if no affiliate.</td>
</tr>
<tr class="odd">
<td>affiliate_commissions_ranking</td>
<td>Affiliate Commissions Ranking</td>
<td>Network ranking of affiliate's commissions (0 to 5, and -1 being 'new'). Blank if no affiliate.</td>
</tr>
<tr class="even">
<td>affiliate_conversion_rate_ranking</td>
<td>Affiliate Conversion Rate Ranking</td>
<td>Network ranking of affiliate's conversion rate (0 to 5, and -1 being 'new'). Blank if no affiliate.</td>
</tr>
<tr class="odd">
<td>affiliate_id</td>
<td>Affiliate ID (Invoca ID)</td>
<td>The Invoca identifier of the affiliate</td>
</tr>
<tr class="even">
<td>affiliate_id_from_network</td>
<td>Affiliate ID</td>
<td>Affiliate ID from the network as set on the Invoca affiliate.</td>
</tr>
<tr class="odd">
<td>affiliate_name</td>
<td>Affiliate</td>
<td>Name of the affiliate</td>
</tr>
<tr class="even">
<td>affiliate_payout_localized</td>
<td>Paid</td>
<td>Amount paid out to the affiliate</td>
</tr>
<tr class="odd">
<td>call_fee_localized</td>
<td>Fees</td>
<td>Telecommunications fee associated with transaction</td>
</tr>
<tr class="even">
<td>call_result_description_detail</td>
<td>Call Result</td>
<td>Status of the transaction</td>
</tr>
<tr class="odd">
<td>call_source_description</td>
<td>Source</td>
<td>Source of the transaction</td>
</tr>
<tr class="even">
<td>calling_phone_number</td>
<td>Caller ID</td>
<td>Caller ID. Formatted as 12 characters, example: <code>866-555-1234</code></td>
</tr>
<tr class="odd">
<td>city</td>
<td>City</td>
<td>City where transaction originated</td>
</tr>
<tr class="even">
<td>complete_call_id</td>
<td>Call Record ID</td>
<td>Globally unique identifier for the call this transaction is part of. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the <code>-</code>.</td>
</tr>
<tr class="odd">
<td>connect_duration</td>
<td>Connected Duration</td>
<td>Duration in seconds that the call that was connected to the call center.</td>
</tr>
<tr class="even">
<td>corrected_at</td>
<td>Corrected At</td>
<td>[Correction only] Date and time the transaction was corrected, in user's time zone, followed by offset from GMT.</td>
</tr>
<tr class="odd">
<td>corrects_transaction_id</td>
<td>Corrects Call</td>
<td>[Correction only] Id of the original transaction that this transaction updates. Values in this row are the corrected ones and should replace the original values. Same format as <code>transaction_id</code>. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the -.</td>
</tr>
<tr class="even">
<td>custom_data</td>
<td>Array of Signals & Marketing Data Values</td>
<td>JSON and XML formats only. This field is not included in response by default, and must be specified in the <code>include_columns</code> parameter. See table below for more information about the structure of this array.</td>
</tr>
<tr class="odd">
<td>destination_phone_number</td>
<td>Destination Phone Number</td>
<td>The phone number where the call was transferred to (useful if an IVR transfers to multiple destinations). Up-to 20 character string, can contain numeric characters (i.e. 0-9) and the following additional characters: '-', '#', '*', 'x', and ','. '</td>
</tr>
<tr class="even">
<td>duration</td>
<td>Total Duration</td>
<td>Duration of the call in seconds. Includes any time spent in an IVR tree before transferring to the call center.</td>
</tr>
<tr class="odd">
<td>ivr_duration</td>
<td>IVR Duration</td>
<td>Duration in seconds that the call spent in the IVR tree.</td>
</tr>
<tr class="even">
<td>keypress_1</td>
<td>Key 1</td>
<td>Name of the first key that was pressed</td>
</tr>
<tr class="odd">
<td>keypress_2</td>
<td>Key 2</td>
<td>Name of the second key that was pressed</td>
</tr>
<tr class="even">
<td>keypress_3</td>
<td>Key 3</td>
<td>Name of the third key that was pressed</td>
</tr>
<tr class="odd">
<td>keypress_4</td>
<td>Key 4</td>
<td>Name of the fourth key that was pressed</td>
</tr>
<tr class="even">
<td>keypresses</td>
<td>Keypresses</td>
<td>List of unique keynames that were pressed during the call</td>
</tr>
<tr class="odd">
<td>margin_localized</td>
<td>Margin</td>
<td>Difference between <code>advertiser_payin_localized</code> and <code>affiliate_payout_localized</code></td>
</tr>
<tr class="even">
<td>matching_advertiser_payin_policies</td>
<td>Matching Advertiser Payin Policies</td>
<td>List of advertiser policies that matched (base, bonus1, bonus2, etc.) to determine the advertiser payin, separated by +. For example, base+bonus1+bonus3. Note that if there was any advertiser payin, this field guaranteed to start with base.</td>
</tr>
<tr class="odd">
<td>matching_affiliate_payout_policies</td>
<td>Matching Affiliate Payout Policies</td>
<td>List of affiliate policies that matched (base, bonus1, bonus2, etc.) to determine the affiliate payout, separated by +. For example, base+bonus2. Note that if there was any affiliate payout, this field guaranteed to start with base.</td>
</tr>
<tr class="even">
<td>media_type</td>
<td>Media Type</td>
<td>Media type of the transaction source</td>
</tr>
<tr class="odd">
<td>mobile</td>
<td>Phone Type</td>
<td>Landline or Mobile or empty string if type is unknown</td>
</tr>
<tr class="even">
<td>notes</td>
<td>Notes</td>
<td>Free-form notations on transaction</td>
</tr>
<tr class="odd">
<td>opt_in_SMS</td>
<td>Opt In Sms</td>
<td>Whether the caller opted in to receive an SMS promotion.</td>
</tr>
<tr class="even">
<td>original_order_id</td>
<td>Order ID</td>
<td>[Sales reporting only] Id of the original transaction that this row is in reference to. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the -.</td>
</tr>
<tr class="odd">
<td>payin_conditions</td>
<td>Payin Conditions</td>
<td>Base condition with highlighting around the term(s) that disqualified advertiser payin. For example: duration &gt; 1 min and in_region</td>
</tr>
<tr class="even">
<td>payout_conditions</td>
<td>Payout Conditions</td>
<td>Base condition with highlighting around the term(s) that disqualified affiliate payout. For example: duration &gt; 1 min and in_region</td>
</tr>
<tr class="odd">
<td>qualified_regions</td>
<td>Qualified Regions</td>
<td>The list of regions that that the caller matched</td>
</tr>
<tr class="even">
<td>recording</td>
<td>Recording</td>
<td>URL to the call recording, if available</td>
</tr>
<tr class="odd">
<td>recording_download_url</td>
<td>(Not Present)</td>
<td>Signed URL to download the call recording. Only present if the feature is enabled for the network.</td>
</tr>
<tr class="even">
<td>region</td>
<td>Region</td>
<td>Region (state, province or country) where transaction originated</td>
</tr>
<tr class="odd">
<td>repeat_calling_phone_number</td>
<td>Repeat Caller</td>
<td>Whether the call was a repeat call. Repeat call detection is not applied to shared or unavailable caller ids.</td>
</tr>
<tr class="even">
<td>start_time_local</td>
<td>Call Start Time</td>
<td>Start of the call in the API user's time zone, followed by offset from GMT.</td>
</tr>
<tr class="odd">
<td>start_time_utc</td>
<td>Call Start Time (UTC timestamp)</td>
<td>Start of the call in milliseconds since Jan 1, 1970. Divide by 1000 to get Unix epoch time.</td>
</tr>
<tr class="even">
<td>start_time_xml</td>
<td>Call Start Time (XML formatted)</td>
<td>Start of the call in the API user's time zone in Soap XML formatted time.</td>
</tr>
<tr class="odd">
<td>start_time_network_timezone</td>
<td>Call Start Time Network Timezone</td>
<td>Start of the call in the networks's time zone, followed by offset from GMT.</td>
</tr>
<tr class="even">
<td>start_time_network_timezone_xml</td>
<td>Call Start Time Network Timezone (XML formatted)</td>
<td>Start of the call in the network's time zone in Soap XML formatted time.</td>
</tr>
<tr class="odd">
<td>transaction_id</td>
<td>Transaction ID</td>
<td>Globally unique identifier for this transaction. Up-to 32 character string, can contain alphanumeric characters (i.e. 0-9A-Z) and the -. This is the Primary Key of the results.</td>
</tr>
<tr class="even">
<td>transaction_type</td>
<td>Type</td>
<td>The type of transaction - Call, Post Call Event, Reported Conversion, or Signal.</td>
</tr>
<tr class="odd">
<td>transfer_from_type</td>
<td>Transfer Type</td>
<td>Where the call came from</td>
</tr>
<tr class="even">
<td>verified_zip</td>
<td>Verified Zip Code</td>
<td>Zip Code entered by callers when prompted during call treatment</td>
</tr>
<tr class="odd">
<td>hangup_cause</td>
<td>End of Call Reason</td>
<td>Who ended the call along with how it was ended</td>
</tr>
<tr class="even">
<td>virtual_line_id</td>
<td>Promo Number ID</td>
<td>The Promo Number ID from the network</td>
</tr>
</tbody>
</table>
