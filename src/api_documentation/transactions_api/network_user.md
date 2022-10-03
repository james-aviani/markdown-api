Network / Brand
===============

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
<td>csv</td>
<td>Comma-Separated Values, or really Anything-Separated Values (see column_separator= below). Returns an optional header row followed by one row for each transaction, with delimited values for each row. <code>https://{NETWORK NAME}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv</code></td>
</tr>
<tr class="even">
<td>xml</td>
<td>Returns an XML document with an array of Transaction elements. <code>https://{NETWORK NAME}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.xml</code></td>
</tr>
<tr class="odd">
<td>json</td>
<td>Returns a JSON array of transaction objects. <code>https://{NETWORK NAME}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.json</code></td>
</tr>
</tbody>
</table>

<details open>
<summary>Schemes</summary>
    <ul>
        <li> JSON</li>
    <ul>
        <li> nested list 1</li>
        <li> nested list 2</li>
    </ul>
        <li>XML</li>
    </ul>
    <ul>
        <li>CSV</li>
    </ul>
        <ul>
        <li>cURL</li>
    </ul>
    
</details>

{{#include _intro.md}}

## Constants

{{#include _intro_constants.md}}

Response
--------

### General Parameters

{{#include _network_param_table.md}}

{{#include _dnpr_param_table.md}}

### Additional Feature Parameters

Example 1: Get the next 20 transactions that occurred after transaction
id C624DA2C-CF3367C3:

    curl -k 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?limit=20&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFH'

Example 2: Get 50 rows from a specific time period with only the
transaction\_id and all Marketing Data columns:

    curl -k 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?limit=50&include_columns=transaction_id,$invoca_custom_columns&exclude_columns=$invoca_default_columns&from=2015-03-26&to=2015-03-27&oauth_token=YbcFH'

Example 3: Get 50 rows that exclude a few columns such as Caller ID and
Call Recordings:

    curl -k 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?limit=50&exclude_columns=calling_phone_number,recording&start_after_transaction_id=C624DA2C-CF3367C3&oauth_token=YbcFH'

Example 4: Get All Transactions from a specific time period that are of
transaction\_type Signal:

    curl -k 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?transaction_type=Signal&from=2015-03-24&to=2015-03-27&oauth_token=YbcFH'

Example 5: Get All Transactions from a specific time period that are of
transaction\_type Post Call Event:

    curl -k 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?transaction_type=PostCallEvent&from=2015-03-24&to=2015-03-27&oauth_token=YbcFH'

Example 6: Get All Transactions from a specific time period that are of
transaction\_type Call and Signal:

    curl -k 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?transaction_type[]=Call&transaction_type[]=Signal&from=2015-03-24&to=2015-03-27&oauth_token=YbcFH'

Example 7: Get All Transactions from a specific time period with oauth
token in the request header:

    curl -k -H 'Authorization: YbcFH' 'https://{Network Name}.invoca.net/api/2020-10-01/networks/transactions/{NETWORK ID}.csv?transaction_type[]=Call&transaction_type[]=Signal&transaction_type[]=PostCallEvent&from=2015-03-24&to=2015-03-27'

Endpoint:

`https://invoca.net/api/2020-10-01/networks/transactions/<network_id>.<format>`
