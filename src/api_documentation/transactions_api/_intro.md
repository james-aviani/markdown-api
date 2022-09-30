Authentication
==============

The API uses OAuth to validate access. The OAuth Token can be passed in
two ways. The first way is to pass the OAuth Token in the header of the
request. The second is to pass the OAuth Token like any other query
parameter. Please note that the OAuth Token is a required parameter.
OAuth Tokens may be generated from the Manage API Credentials page.

Query Parameters
================

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
<td>from=</td>
<td>Starting date in user's time zone, in format YYYY-MM-DD. Example: 2011-06-01. Inclusive.</td>
</tr>
<tr class="even">
<td>to=</td>
<td>Ending date in user's time zone, in format YYYY-MM-DD. Example: 2011-06-07. Inclusive.</td>
</tr>
<tr class="odd">
<td>limit=</td>
<td>Max number of transactions to return at a time. Defaults to 1000. Limited to at most 4000.</td>
</tr>
<tr class="even">
<td>transaction_id=</td>
<td>A specific transaction. If transaction_id is specified and no transaction with that ID is found, nothing will be returned. Returns at most 1 transaction.</td>
</tr>
<tr class="odd">
<td>call_record_id=</td>
<td>All transactions belonging to a specific call. If call_record_id is specified and no call with that ID is found, nothing will be returned. Returns all transactions belonging to the call record. <strong>Note:</strong> If transaction_id <em>and</em> call_record_id are passed, the specified transaction must belong to the specified call. If it does, the transaction will be returned. If it does not, nothing will be returned.</td>
</tr>
<tr class="even">
<td>start_after_transaction_id=</td>
<td>Transaction_id to start retrieving after. This should be the last value retrieved previously. Default (or empty string) means start at the oldest.</td>
</tr>
<tr class="odd">
<td>include_columns=</td>
<td>comma-separated list of field names to be returned in the response for each transaction (if not specified, all available fields for the account will be returned, minus any columns in exclude_columns)</td>
</tr>
<tr class="even">
<td>exclude_columns=</td>
<td>comma-separated list of field names to be excluded in the response for each transaction</td>
</tr>
<tr class="odd">
<td>column_separator=</td>
<td>[.csv format only] Separator between columns. Default is , for comma-separated values. (Can be set to any other separator like | for pipe-separated values or %09 for tab-separated values.)</td>
</tr>
<tr class="even">
<td>row_separator=</td>
<td>[.csv format only] Separator between lines. Defaults to %0A for n (line feed). Use %0D%0A for rn (carriage return + line feed).</td>
</tr>
<tr class="odd">
<td>include_header=</td>
<td>[.csv format only] 1 to include a header row; 0 to omit the header row. Default is 1.</td>
</tr>
<tr class="even">
<td>force_quotes=</td>
<td>[.csv format only] 1 to quote all CSV fields; 0 to only quote fields that contain separators. Default is 0.</td>
</tr>
<tr class="odd">
<td>transaction_type=</td>
<td>Filters for the type of transaction. Valid inputs are Call, PostCallEvent, Sale, or Signal. Sale maps to the Reported Conversion type.</td>
</tr>
</tbody>
</table>

In order to ensure that all transactions are returned when using the
from= and to= date query parameters, you should store the last
transaction id you have downloaded and pass it as the
start\_after\_transaction\_id to the next request. Typical usage on the
polling interval is to repeatedly call the API until no rows are
returned, meaning you have downloaded all transactions. Please note, the
"to" and "from" date range parameters are both necessary, providing only
one or the other will not filter the results.
