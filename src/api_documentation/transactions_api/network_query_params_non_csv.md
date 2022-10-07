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
<td>transaction_type=</td>
<td>Filters for the type of transaction. Valid inputs are Call, PostCallEvent, Sale, or Signal. Sale maps to the Reported Conversion type.</td>
</tr>
</tbody>
</table>

In order to ensure that all transactions are returned when using the
<code>from=</code> and <code>to=</code> date query parameters, you should store the last
transaction id you have downloaded and pass it as the
<code>start_after_transaction_id</code> to the next request. Typical usage on the
polling interval is to repeatedly call the API until no rows are
returned, meaning you have downloaded all transactions. Please note, the
"to" and "from" date range parameters are both necessary, providing only
one or the other will not filter the results.
