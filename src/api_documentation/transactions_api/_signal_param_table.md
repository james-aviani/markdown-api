Signal Parameters
=================

Most of the fields in this table are now deprecated. See Marketing Data
& Signal Parameters section for best practices for accessing Signal
name, source and value. Additionally, some fields will be removed if the
Signal Transactions Rollup feature is enabled.

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
<td>signal_name <em>(deprecated)</em></td>
<td>Signal Name</td>
<td>The name describing the signal event. See the Marketing Data Parameters section for an updated way of accessing the Signal(s) that are true on a given transaction.</td>
</tr>
<tr class="even">
<td>signal_description <em>(deprecated)</em></td>
<td>Signal Description</td>
<td>Free form text for providing additional details about the signal.</td>
</tr>
<tr class="odd">
<td>signal_partner_unique_id</td>
<td>Signal Partner ID</td>
<td>Unique identifier, to distinguish between updating an existing Signal or Post Call Event (for example correcting a sale that was reported) versus adding a second sale or Post call Event to the call (for example a reservation made while on the call and then an add on item purchased later).</td>
</tr>
<tr class="even">
<td>signal_occurred_at</td>
<td>Signal Occurred At</td>
<td>10 digit time that the signal occurred, in UTC seconds since 1/1/70, also known as Unix time_t.</td>
</tr>
<tr class="odd">
<td>signal_source <em>(deprecated)</em></td>
<td>Signal Source</td>
<td>The source of the signal. Possible values are :UserOverride, :Api, :Import, :Expression, :Ivr, and :Machine.</td>
</tr>
<tr class="even">
<td>signal_value <em>(deprecated)</em></td>
<td>Signal Value</td>
<td>True or false as to whether or not the signal was met and null if it is not a signal transaction.</td>
</tr>
<tr class="odd">
<td>revenue</td>
<td>Revenue (Sale Amount)</td>
<td>The revenue applied to the call via Signal revenue proxies or Post Call Events.</td>
</tr>
<tr class="even">
<td>signal_custom_parameter_1 <em>(deprecated)</em></td>
<td>Signal Custom Param 1</td>
<td>Up to 255 character string.</td>
</tr>
<tr class="odd">
<td>signal_custom_parameter_2 <em>(deprecated)</em></td>
<td>Signal Custom Param 2</td>
<td>Up to 255 character string.</td>
</tr>
<tr class="even">
<td>signal_custom_parameter_3 <em>(deprecated)</em></td>
<td>Signal Custom Param 3</td>
<td>Up to 255 character string.</td>
</tr>
</tbody>
</table>
