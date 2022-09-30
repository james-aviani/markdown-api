Advertiser Campaigns
====================

Advertiser Campaigns can be managed using the Network API. In addition
to create, update, and show operations, this interface provides
additional endpoints including go\_live, archive, and quick\_stats.

Note that the <span
class="title-ref">&lt;advertiser\_id\_from\_network&gt;</span> and <span
class="title-ref">&lt;advertiser\_campaign\_id\_from\_network&gt;</span>
are the network’s id for those objects, not Invoca’s.

`/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

We support passing back current\_terms and future\_terms on campaigns.
The current properties of the campaign are reflected in current\_terms.
All changes to the campaign are staged in future\_terms. Once the
campaign goes live, future\_terms transition over to current\_terms.

You can set budgets on your campaign. There are three budget types,
budget\_cap\_alert which is based on commissions,
periodic\_call\_cap\_alert, which is based on the number of calls in a
given period, and concurrent\_call\_cap\_alert, which is based on the
number of simultaneous calls. These budget activities are only
applicable for AffiliateEnabled campaigns (Known in the platform as a
“Publisher Promotion” Campaign Type.)

You are not allowed to delete campaigns.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
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
<td>The internal Invoca id for this Advertiser Campaign.</td>
</tr>
<tr class="even">
<td>id_from_network</td>
<td>string</td>
<td>The network object_id for this Advertiser Campaign. Unique within network. Not required when auto-generation is enabled at network level.</td>
</tr>
<tr class="odd">
<td>name</td>
<td>string</td>
<td>Campaign name.</td>
</tr>
<tr class="even">
<td>campaign_type</td>
<td>string</td>
<td>3 Campaign Types Supported:
<ul>
<li><strong>AffiliateEnabled:</strong> Advertiser Campaign that allows Affiliates to promote it. Includes Payin and Payouts for qualified Calls.</li>
<li><strong>DirectOnly:</strong> Advertiser Campaign used for internal marketing. No ability to promote via Affiliates or setup Payin and Payouts for Calls.</li>
<li><strong>ExternalOnly:</strong> Advertiser Campaign used for external calls uploaded via the Call Ingestion API. See <code class="interpreted-text" data-role="doc">../../call_ingestion_api/index</code> for more details.</li>
</ul></td>
</tr>
<tr class="odd">
<td>description</td>
<td>string</td>
<td>Campaign Description.</td>
</tr>
<tr class="even">
<td>url</td>
<td>string</td>
<td>Click URL Template.</td>
</tr>
<tr class="odd">
<td>object_url</td>
<td>string (read-only)</td>
<td>URL for reaching the advertiser campaign in the UI.</td>
</tr>
<tr class="even">
<td>timezone</td>
<td>string</td>
<td>Supported Time Zones: <a href="http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html">http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html</a></td>
</tr>
<tr class="odd">
<td>campaign_language</td>
<td>string</td>
<td>Supported Campaign Languages: “English", "French", "Spanish".</td>
</tr>
<tr class="even">
<td>campaign_country</td>
<td>string</td>
<td>Supported Countries: “US", "CA", "UK", "AU", "CN", "FI", "FR", "DE", "HK", "IT", "JP", "NL", "SG", "SE", "CH".</td>
</tr>
<tr class="odd">
<td>operating_24_7</td>
<td>boolean</td>
<td></td>
</tr>
<tr class="even">
<td><strong>affiliate_payout</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>policies</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>currency</td>
<td>string</td>
<td>USD, GBP, EUR.</td>
</tr>
<tr class="odd">
<td>amount</td>
<td>decimal</td>
<td>Payout Amount.</td>
</tr>
<tr class="even">
<td>condition</td>
<td>string</td>
<td>Condition options depend on the following Campaign Setup items being in place: Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Connect Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Repeat, In Region (specified across multiple Regions), During Hours, Key Press, Is Mobile, Is Landline, Send SMS All may be grouped with logic operators (AND/OR/NOT).</td>
</tr>
<tr class="odd">
<td>type</td>
<td>string</td>
<td>One of: Base, Bonus.</td>
</tr>
<tr class="even">
<td><strong>advertiser_payin</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>policies</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>currency</td>
<td>string</td>
<td>Supported Currencies: ‐ USD, GBP, EUR.</td>
</tr>
<tr class="odd">
<td>amount</td>
<td>integer</td>
<td>Advertiser Payin Amount.</td>
</tr>
<tr class="even">
<td>condition</td>
<td>string</td>
<td>Condition options depend on the following Campaign Setup items being in place: Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Connect Duration (seconds/minutes) and (greater than, greater than or equal to, less than, less than or equal to, equal to), Repeat, In Region (specified across multiple Regions), During Hours, Key Press, Is Mobile, Is Landline, Send SMS. All may be grouped with logic operators (AND/OR/NOT).</td>
</tr>
<tr class="odd">
<td>type</td>
<td>string</td>
<td>One of: Base, Bonus.</td>
</tr>
<tr class="even">
<td><strong>hours</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>[day of week]_open (e.g. friday_open)</td>
<td>string</td>
<td>Open Hours. In seconds past midnight (e.g. 0 for midnight, 32400 for 9:00 AM).</td>
</tr>
<tr class="even">
<td>[day of week]_close (e.g. friday_close)</td>
<td>string</td>
<td>Closed Hours. In seconds past midnight (e.g. 0 for midnight, 75600 for 9:00 PM).</td>
</tr>
<tr class="odd">
<td>[day of week]_closed (e.g. sunday_closed)</td>
<td>string</td>
<td>true, false, or null. Whether the business is closed that day of the week.</td>
</tr>
<tr class="even">
<td><strong>named_regions</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>name</td>
<td>string</td>
<td>Region Name.</td>
</tr>
<tr class="even">
<td><strong>regions</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>region_type</td>
<td>string</td>
<td>Region Type. Can be one of: Zone, City, State, Country.</td>
</tr>
<tr class="even">
<td>value</td>
<td>string</td>
<td>Region Value, e.g. “Sacramento, CA”, or just “CA”.</td>
</tr>
<tr class="odd">
<td>ivr_tree</td>
<td>hash</td>
<td>See following Advertiser Campaign IVR Section.</td>
</tr>
<tr class="even">
<td><strong>budget_activities</strong></td>
<td></td>
<td>Only applicable for AffiliateEnabled campaigns.</td>
</tr>
<tr class="odd">
<td><strong>budget_cap_alert</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>reset_period</td>
<td>string (required)</td>
<td>Budget will reset based on this entry. One of: Daily, Weekly, Monthly, Quarterly, Ongoing.</td>
</tr>
<tr class="odd">
<td>starts_at</td>
<td>date (required)</td>
<td>Budget Start.</td>
</tr>
<tr class="even">
<td>budget_currency</td>
<td>string (required)</td>
<td>Budget Currency.</td>
</tr>
<tr class="odd">
<td>time_zone</td>
<td>string (required)</td>
<td>Supported Time Zones: “Pacific Time (US &amp; Canada)”, “Mountain Time (US &amp; Canada)”, “Central Time (US &amp; Canada)”, “Eastern Time (US &amp; Canada)”, “London”, “UTC”.</td>
</tr>
<tr class="even">
<td>budget_amount</td>
<td>decimal (required)</td>
<td>Budget Amount.</td>
</tr>
<tr class="odd">
<td>include_call_fees</td>
<td>boolean</td>
<td>True if you want call fees to be included in the budget.</td>
</tr>
<tr class="even">
<td><strong>periodic_call_cap_alert</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>reset_period</td>
<td>string (required)</td>
<td>Budget will reset based on this entry. One of: Daily, Weekly, Monthly, Quarterly, Ongoing.</td>
</tr>
<tr class="even">
<td>starts_at</td>
<td>date (required)</td>
<td>Call Cap Start.</td>
</tr>
<tr class="odd">
<td>budget_currency</td>
<td>string (required)</td>
<td>Budget Currency.</td>
</tr>
<tr class="even">
<td>time_zone</td>
<td>string (required)</td>
<td>Supported Time Zones: “Pacific Time (US &amp; Canada)”, “Mountain Time (US &amp; Canada)”, “Central Time (US &amp; Canada)”, “Eastern Time (US &amp; Canada)”, “UTC”.</td>
</tr>
<tr class="odd">
<td>budget_amount</td>
<td>decimal (required)</td>
<td>Budget Amount.</td>
</tr>
<tr class="even">
<td>auto_approve</td>
<td>string</td>
<td>One of: All, None, Approved_Affiliates Default: None This controls if affiliates are automatically approved when applying to the campaign.</td>
</tr>
<tr class="odd">
<td>visibility</td>
<td>string</td>
<td>One of: All, None, Approved_Affiliates Default: All This controls the level of visibility publishers have when applying to campaigns.</td>
</tr>
<tr class="even">
<td>expiration_date</td>
<td>string</td>
<td>date string (ex. ‘2015‐01‐01’). Read only.</td>
</tr>
<tr class="odd">
<td>default_creative_id_from_network</td>
<td>integer</td>
<td>Default Creative ID.</td>
</tr>
<tr class="even">
<td><strong>concurrent_call_cap_alert</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>budget_amount</td>
<td>decimal (required)</td>
<td>Budget Amount.</td>
</tr>
<tr class="even">
<td>timeout</td>
<td>integer</td>
<td>Seconds to wait for the campaign to go live. Between 2 and 60.</td>
</tr>
</tbody>
</table>

Advertiser Campaign IVRs
------------------------

When creating an advertiser campaign, you need to provide some call flow
logic through an IVR tree. Depending on the advertiser/campaign type
(direct, bundled, etc) you may use the following node types:

Node Parameters and Usage

\* =&gt; required parameter

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th>Node Type</th>
<th>Parameters</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Menu</td>
<td><p>*prompt</p>
<p>asr_phrases</p>
<p>confirm_response_enabled</p></td>
<td>Allows the caller to select from up to 9 choices (e.g. choosing a department, selecting a language, etc).</td>
</tr>
<tr class="even">
<td>Connect</td>
<td><p>prompt</p>
<p>*destination_phone_number</p>
<p>*destination_country_code</p>
<p>*destination_extension</p>
<p>asr_phrases</p>
<p>connect_timeout</p></td>
<td>Forwards the call to a selected phone number after optionally reading a prompt. If ringing_rollover is enabled for the network, a connect_timeout value can be configured along with a "Failover" child node.</td>
</tr>
<tr class="odd">
<td>Failover</td>
<td>*destination_phone_number</td>
<td>Forwards the call to a fallback destination number if the original destination configured on the parent node returns a busy signal OR if the configured connect_timeout value on the parent node is exceeded. Can only be configured as the child of another node, and not as a standalone node.</td>
</tr>
<tr class="even">
<td>EndCall</td>
<td><p>prompt</p>
<p>asr_phrases</p></td>
<td>Ends the call after optionally reading a prompt.</td>
</tr>
<tr class="odd">
<td>SmsPromo</td>
<td><p>*prompt</p>
<p>*sms_promo_copy</p>
<p>sms_promo_delay</p>
<p>sms_promo_sender</p>
<p>asr_phrases</p></td>
<td>Provide the option for a user to receive a text message with a special promotion.</td>
</tr>
<tr class="even">
<td>Condition</td>
<td><p>*condition</p>
<p>asr_phrases</p></td>
<td>If/else option for a call based on the qualities of the call/caller.</td>
</tr>
<tr class="odd">
<td>VerifyLocation</td>
<td><p>prompt</p>
<p>asr_phrases</p></td>
<td>Prompts the caller to verify the guessed location or confirm through input. Useful if geographical data is important or useful in a condition node.</td>
</tr>
<tr class="even">
<td>DynamicRoute</td>
<td><p>prompt</p>
<p>*dynamic_route_destination</p>
<p>asr_phrases</p>
<p>behave_like_ring_group</p>
<p>ring_group_connect_timeout</p>
<p>distribution_method</p>
<p>call_acceptance</p>
<p>ring_group_destination_total_limit</p>
<p>max_simultaneous_calls</p></td>
<td>Forwards the call to a destination that is extracted from a marketing data field specified in dynamic_route_destination. The destination must be a phone number or if you are SIP integrated, can be a string that is routable by your SIP infrastructure. If behave_like_ring_group is enabled, then the marketing data field selected as the dynamic_route_destination may contain a comma-separated string of values, where each value represents a phone number that will be dialed as part of a RingGroup. RingGroup settings, such as ring_group_connect_timeout, distribution_method, call_acceptance, ring_group_destination_total_limit, and max_simultaneous_calls will also be made available.</td>
</tr>
<tr class="odd">
<td>AnyKeyPress</td>
<td><p>*prompt</p>
<p>asr_phrases</p></td>
<td>Prompts the caller to make any keypress to continue the call.</td>
</tr>
<tr class="even">
<td>NumberQuestion</td>
<td><p>*prompt</p>
<p>*number_question_type</p>
<p>confirm_response_enabled</p>
<p>error_prompt_disabled</p>
<p>custom_error_prompt_text</p>
<p>caller_response_custom_data_partner_name</p>
<p>asr_phrases</p></td>
<td>Prompts the caller to respond with a multi-digit number (e.g. Phone Number, Date) and validates it if applicable. The caller's response may be saved to a marketing data field.</td>
</tr>
<tr class="odd">
<td>YesOrNo</td>
<td><p>*prompt</p>
<p>confirm_response_enabled</p>
<p>error_prompt_disabled</p>
<p>custom_error_prompt_text</p>
<p>asr_phrases</p></td>
<td>Prompts the caller to respond with either a yes or no answer. The caller's response determines how the call will continue.</td>
</tr>
<tr class="even">
<td>RingGroup</td>
<td><p>prompt</p>
<p>*ring_group_destinations</p>
<p>*ring_group_connect_timeout</p>
<p>distribution_method</p>
<p>call_acceptance</p>
<p>ring_group_destination_total_limit</p>
<p>max_simultaneous_calls</p></td>
<td>Forwards the call to a group of numbers defined in the ring_group_destinations array of hashes. The destinations will be in the order determined by the distribution_method. If a destination plays a busy signal OR the ring_group_connect_timeout value is exceeded before the call is answered, the next destination will be dialed. When call_acceptance is enabled, the call must be expressly accepted instead of answered. The ring_group_destination_total_limit may only be configured when the distribution_type is set to Random. This node type also allows for the configuration of max_simultaneous_calls when simultaneous calling is enabled for the network.</td>
</tr>
</tbody>
</table>

Node Details

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr class="header">
<th>Node Type</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Menu</td>
<td>Can have 1-9 child nodes, with each child corresponding to keypresses 1-9. At the end of the child list, it can also optionally have failover child nodes designated by a node with a keypress_failover_type parameter (see example below). If speech recognition is enabled, the caller may also respond verbally with their menu choice, including using the phrases that have been configured in field asr_phrases for each of the child nodes. (e.g. the caller can say "sales" or "one" for 1, and "support" or "two" for 2).</td>
</tr>
<tr class="even">
<td>Connect</td>
<td>May not have any children unless ringing_rollover is enabled for the network. The prompt will be read before connecting to the provided phone number. If ringing_rollover is enabled for the network, a connect_timeout value can be configured along with a "Failover" child node.</td>
</tr>
<tr class="odd">
<td>Failover</td>
<td>May not have any children. The provided phone number will be dialed if the destination configured on the parent node returns a busy signal when dialed OR if the connect_timeout value configured on the parent node is exceeded. Can only be configured as the child of another node, and not as a standalone node.</td>
</tr>
<tr class="even">
<td>EndCall</td>
<td>May not have any children. The prompt will be read before ending the call.</td>
</tr>
<tr class="odd">
<td>SmsPromo</td>
<td>May have exactly 1 child node. After accepting or declining the promotional sms, the child node will be executed. To accept the promotional sms, the user must push 9 on the phone (this should be added as part of the prompt). Only numbers recognized as mobile phones will be offered the sms option.</td>
</tr>
<tr class="even">
<td>Condition</td>
<td>May have exactly 2 child nodes. If the conditions are met, the first child node is executed. If they are not met then the second child node is executed. See the conditions section and examples below for details on valid conditions.</td>
</tr>
<tr class="odd">
<td>NearestBranch</td>
<td>May have exactly 1 child node. The caller will be prompted to verify their location prior to forwarding the call. If no branch is within ‘radius_miles’ of the caller then the child node will be executed.</td>
</tr>
<tr class="even">
<td>VerifyLocation</td>
<td>May have exactly 1 child node. The prompt will play before verifying the callers location. The child node will be executed after verifying the callers location.</td>
</tr>
<tr class="odd">
<td>DynamicRoute</td>
<td>May have exactly 1 child node. We will evaluate the marketing data field value specified on this node's dynamic_route_destination. With non-SIP integration, if the extracted value is a valid phone number and the destination phone number is in an allowed region given your settings, we will play the prompt and transfer the call, otherwise the child node will be executed without the prompt. When SIP integrated, we also allow transferring to any string (such as an extension), in which case the destination should be routable by your SIP infrastructure. If the node is enabled to behave like a RingGroup, then the marketing data field selected as the dynamic_route_destination may contain a comma-separated string of values, where each value represents a phone number that will be dialed as part of a RingGroup.</td>
</tr>
<tr class="even">
<td>AnyKeyPress</td>
<td>May have exactly 2 child nodes. If any keypress is made, the first child node is executed. If no keypress is made, then the second child node is executed.</td>
</tr>
<tr class="odd">
<td>NumberQuestion</td>
<td>May have exactly 1 child node. Requires a question type to be selected (e.g. Phone Number, Date). The prompt will play before the caller answers the question. The answer may be saved in a marketing data field. At the end of the child list, this node type can also optionally have failover child nodes, designated by a node with a keypress_failover_type parameter (see example below).</td>
</tr>
<tr class="even">
<td>YesOrNo</td>
<td>May have exactly 2 child nodes. If a keypress of 1 is made, the first child node is executed. If a kepyress of 2 is made, the second child node is executed. If speech recognition is enabled, the caller can also say "yes" for 1 and "no" for 2. At the end of the child list, this node type can also optionally have failover child nodes, designated by a node with a keypress_failover_type parameter (see example below).</td>
</tr>
<tr class="odd">
<td>RingGroup</td>
<td>Forwards the call to a group of numbers that will be dialed in the order determined by the distribution method. If a destination plays a busy signal OR the ring_group_connect_timeout value is exceeded before the call is answered (or accepted), the next destination will be dialed. This node type also allows for simultaneous calling when it is enabled.</td>
</tr>
</tbody>
</table>

Parameter Details

<table>
<colgroup>
<col style="width: 22%" />
<col style="width: 9%" />
<col style="width: 68%" />
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
<td>asr_phrases</td>
<td>Array of hashes</td>
<td>A list of phrases that apply to the child of a Menu node. Can only be used when speech recognition is enabled. Allows the caller to respond verbally with one of the configured phrases instead of making a keypress. For example, the first child of a Menu node may have a value of [{"phrase": "sales"}, {"phrase": "support"}] for "asr_phrases", where the caller may say "sales" or "support" to select the Menu option instead of pressing 1.</td>
</tr>
<tr class="even">
<td>behave_like_ring_group</td>
<td>Boolean</td>
<td>When enabled, the given node will behave like a RingGroup node and additional settings may become available. See the "Node Parameters and Usage" and "Node Details" tables for more details.</td>
</tr>
<tr class="odd">
<td>call_acceptance</td>
<td>Boolean</td>
<td>When enabled, the agent / call recipient must press 1 on their keypad to accept the call or can press 2 to decline. If speech recognition is also enabled, the agent can also say 'yes' to accept or 'no' to decline the call. This is only available for RingGroup nodes or nodes that have the behave_like_ring_group setting enabled.</td>
</tr>
<tr class="even">
<td>caller_response_custom_data_partner_name</td>
<td>String</td>
<td>The partner name of the custom data field that will be used to save the caller's response to the NumberQuestion prompt.</td>
</tr>
<tr class="odd">
<td>condition</td>
<td>String</td>
<td>The boolean condition that decided if the first or second child will be executed in a condition node.</td>
</tr>
<tr class="even">
<td>confirm_response_enabled</td>
<td>Boolean</td>
<td>When enabled, the system will read back the caller's answer to the prompt and ask for confirmation. The caller can press 1 for "yes" and 2 for "no". If speech recogition is enabled, callers can also confirm their response by saying "yes" or "no".</td>
</tr>
<tr class="odd">
<td>connect_timeout</td>
<td>Integer</td>
<td>The number of seconds we will wait before dialing the fallback number configured in the "Failover" node if the call is not answered or a busy signal is detected.</td>
</tr>
<tr class="even">
<td>custom_error_prompt_text</td>
<td>String</td>
<td>Custom text that will be played to the caller when they provide an invalid response or no response.</td>
</tr>
<tr class="odd">
<td>destination_country_code</td>
<td>String</td>
<td>The country code for the destination_phone_number.</td>
</tr>
<tr class="even">
<td>destination_phone_number</td>
<td>String</td>
<td>The phone number to forward the caller to.</td>
</tr>
<tr class="odd">
<td>destination_extension</td>
<td>String</td>
<td>Extension keypresses on the destination number. Commas indicate pause (e.g. 1,,,234 means a keypress of "1" is executed followed by a 3 second pause and an extension keypress of "234").</td>
</tr>
<tr class="even">
<td>distribution_method</td>
<td>String</td>
<td>The method used to determine which order the numbers in a RingGroup are dialed. Default is "InOrder". For RingGroup nodes, the available methods are "InOrder", "Random" and "Weighted". For nodes that have the behave_like_ring_group setting enabled, only methods "InOrder" and "Random" are available. When set to "Random", all enabled numbers are equally likely to be near the top of the list. When set to "Weighted", numbers with a higher distribution weight are more likely to be near the top of the list. (See the ring_group_destinations parameter details for how to configure "distriubiton_weight").</td>
</tr>
<tr class="odd">
<td>dynamic_route_destination</td>
<td>Strings</td>
<td>The custom data field partner name you want to use as the destination in a dynamic route node. Typically a phone number in e164 format.</td>
</tr>
<tr class="even">
<td>error_prompt_disabled</td>
<td>Boolean</td>
<td>If set to true, no error sound or prompt will play when the caller provides an invalid response or no response. If set to false, when the caller provides an invalid response or no response, an error sound will play, or you can optionally define a custom error prompt via the parameter custom_error_prompt_text.</td>
</tr>
<tr class="odd">
<td>keypress_failover_type</td>
<td>String</td>
<td>The failover type to use for a child node of a Menu. "Wrong" for when a wrong keypress is pressed by the caller on any attempt for the parent menu (shown in reporting as keypress "W"). "None" for when there is no keypress by the caller for all attempts for the parent menu (shown in reporting as keypress "N"). Omit this parameter for normal keypresses. See example below.</td>
</tr>
<tr class="even">
<td>max_simultaneous_calls</td>
<td>Integer</td>
<td>The maximum amount of ring group numbers that we will attempt to dial at one time. Default is 1.</td>
</tr>
<tr class="odd">
<td>number_question_type</td>
<td>String</td>
<td>The type of question you want to ask as part of the NumberQuestion node type. This may be "Digits", "Number", "PhoneNumber", "Date", "Currency", "Time", or "ZipCode".</td>
</tr>
<tr class="even">
<td>prompt</td>
<td>String</td>
<td>The text that will be read before a nodes action occurs. An empty string will result in no prompt being read, and the following action will occur immediately.</td>
</tr>
<tr class="odd">
<td>ring_group_connect_timeout</td>
<td>Integer</td>
<td>The number of seconds we will wait before dialing the next number in a RingGroup if the call is not answered or a busy signal is detected. When call_acceptance is enabled, this will represent the amount of time we will wait for the call to be accepted instead of answered.</td>
</tr>
<tr class="even">
<td>ring_group_destinations</td>
<td>Array of hashes</td>
<td>A list of destination hashes for the RingGroup node. Each hash must contain a "ring_group_number" parameter at minimum. Other optional parameters are "description" (string), "destination_disabled" (boolean, default: false), and "distribution_weight" (integer, default: 1). "destination_disabled" when set to true, will prohibit the destination from being dialed as part of the RingGroup. "distribution_weight" may only be used when the distribution_method of the RingGroup node is set to "Weighted". For example, ring_group_destinations may have a value of [{"ring_group_number": "800-444-1111", "description": "Call Center 1", "distribution_weight": 2 }, {"ring_group_number": "800-444-2222", "description": "Call Center 2", "distribution_weight": 1 }].</td>
</tr>
<tr class="odd">
<td>ring_group_destination_total_limit</td>
<td>Integer</td>
<td>The total amount of phone numbers in the RingGroup that we will try dialing before giving up. For example, if you have configured 10 ring group numbers and the limit is set to 4, we will only dial the first 4 dynamically chosen numbers.</td>
</tr>
<tr class="even">
<td>sms_promo_copy</td>
<td>String</td>
<td>The text that will be sent to the caller if they accept the promotional sms.</td>
</tr>
<tr class="odd">
<td>sms_promo_delay</td>
<td>Integer</td>
<td>The time delay in seconds before sending the promotional sms. This may be 1 (Immediately), 1800 (30 minutes), 86400 (1 day), 604800 (7 days), or 2592000 (30 days).</td>
</tr>
<tr class="even">
<td>sms_promo_sender</td>
<td>String</td>
<td>The email address that will be shown in the sms. This defaults to <a href="mailto:sms@invoca.net">sms@invoca.net</a>.</td>
</tr>
</tbody>
</table>

Conditions

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 85%" />
</colgroup>
<thead>
<tr class="header">
<th>Condition</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>during_hours</td>
<td>True if the caller is calling during the hours specified in the campaign.</td>
</tr>
<tr class="even">
<td>in_region</td>
<td>True if the caller is calling from the region specified in the campaign.</td>
</tr>
<tr class="odd">
<td>landline</td>
<td>True if the caller is calling from a landline phone.</td>
</tr>
<tr class="even">
<td>mobile</td>
<td>True if the caller is calling from a mobile phone.</td>
</tr>
<tr class="odd">
<td>pressed[key]</td>
<td>True if the caller pressed the named key.</td>
</tr>
<tr class="even">
<td>repeat</td>
<td>True if the caller has already called this campaign in the last N days (the interval N can be set on the campaign; the default is 30 days).</td>
</tr>
<tr class="odd">
<td>sms_sent</td>
<td>The caller chose to receive a text message during the call.</td>
</tr>
<tr class="even">
<td>and</td>
<td>Joins two conditions and is true if both conditions are true.</td>
</tr>
<tr class="odd">
<td>or</td>
<td>Joins two conditions and is true if either condition is true.</td>
</tr>
<tr class="even">
<td>not</td>
<td>Inverts the following condition.</td>
</tr>
<tr class="odd">
<td>( )</td>
<td>Used for grouping.</td>
</tr>
</tbody>
</table>

Example Conditions

<table>
<colgroup>
<col style="width: 78%" />
<col style="width: 21%" />
</colgroup>
<thead>
<tr class="header">
<th>Example</th>
<th>Condition</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Call duration was a minute and a half or longer</td>
<td>duration &gt;= 1 min 30 sec.</td>
</tr>
<tr class="even">
<td>Call came in during business hours</td>
<td>during_hours.</td>
</tr>
<tr class="odd">
<td>Call was from a mobile phone where the caller pressed the 2 key in response to the first menu</td>
<td>mobile and pressed[2].</td>
</tr>
<tr class="even">
<td>Call was from the selected geographic region or was longer than 12 seconds</td>
<td>in_region or duration &gt; 12 sec.</td>
</tr>
<tr class="odd">
<td>Caller pressed 1 to the first question in a series and was not in the geographic region or calling during business hours</td>
<td>pressed[a 1] and not (in_region or during_hours).</td>
</tr>
</tbody>
</table>

Note that **and** is higher precedence than **or**. So if you use both
in a condition like this:

`mobile or in_region and during_hours`

it is equivalent to this:

`mobile or (in_region and during_hours)`

Caller ID options can also be configured by optionally including a
`caller_id` object inside `ivr_tree`:

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr class="header">
<th>Setting</th>
<th>Mask</th>
<th>Example</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>"original"</td>
<td>None</td>
<td>{ setting: "original" }</td>
<td>Display caller's caller id to call center agent. (Default)</td>
</tr>
<tr class="even">
<td>"promo"</td>
<td>None</td>
<td>{ setting: "promo" }</td>
<td>Display affiliate promo number to call center agent. (Only if forwarding to a local number.)</td>
</tr>
<tr class="odd">
<td>"specific"</td>
<td>String containing phone number</td>
<td>{ setting: "specific", mask: "800-555-5555" }</td>
<td>Display a specific caller ID number.</td>
</tr>
<tr class="even">
<td>"partial"</td>
<td>String containing mask format</td>
<td>{ setting: "partial", mask: "800-555-XXXX" }</td>
<td>Display caller's caller ID with digits replaced.</td>
</tr>
</tbody>
</table>

### Custom Data

Advertiser campaigns may have Custom Data Fields applied to them, which
will be applied to calls originating through the advertiser campaign. To
apply Custom Data Values to an advertiser campaign, the top level
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

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/advertiser_campaigns/<advertiser_campaign_id_from_network>.json`

Keypress Failover Type --------------

**Example IVR Tree utilizing keypress\_failover\_type**

    "ivr_tree": {
      "root": {
        "node_type":"Menu",
        "prompt":"Press 1 for sales, press 2 for support.",
        "children": [
          {
            "node_type": "Connect",
            "destination_phone_number": "8004377950",
            "destination_country_code": "1",
            "prompt": "Directing you to sales"
          },
          {
            "node_type": "Connect",
            "destination_phone_number": "8004377951",
            "destination_country_code": "1",
            "prompt": "Directing you to support"
          },
          {
            "node_type": "Connect",
            "destination_phone_number": "8004377952",
            "destination_country_code": "1",
            "prompt":"Forwarding you to an operator.",
            "keypress_failover_type":"Wrong"
          },
          {
            "node_type":"EndCall",
            "prompt":"No key was selected, goodbye.",
            "keypress_failover_type":"None"
          }
        ]
      }
    }

Error Handling
--------------

Forbidden – 403:

### PUT/POST

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertiser/<advertiser_id_from_network>/advertiser_campaign/<advertiser_campaign_id_from_network>/advertiser_campaigns/<advertiser_campaign_id>.json`

Content Type: application/json

Response Code: 403

**Request Body**

    {
      "node_type":"Menu",
      "prompt":"Prompt text",
      "prompt_id_from_network":"",
      "prompt_url":null,
      "prompt_recieved":null,
      "children": [
        {
          "node_type":"Menu",
          "prompt":"",
          "prompt_id_from_network":"",
          "prompt_url":null,
          "prompt_recieved":null,
          "children": [
            {
              "node_type":"EndCall",
              "prompt":"",
              "prompt_id_from_network":"",
              "prompt_url":null,
              "prompt_recieved":null
            }
          ]
        }
      ]
    }

**Response Body**

    {
      "error": {
        "ivr_tree": {
          "children": [
            {
              "0": {
                "prompt": [
                  "cannot be empty"
                ]
              }
            }
          ]
        }
      }
    }

The number in error message represents the index of the child node in
the tree, or in other words, it is the keypress of the node containing
the error minus one.
