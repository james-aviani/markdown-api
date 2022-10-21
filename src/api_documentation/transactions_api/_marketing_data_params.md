## Marketing Data & Signal Parameters


Please click [this
link](https://www2.invoca.net/customer_data_dictionary/home) to access
the marketing data parameters specific to your account.

The Partner (API) Name is used as the field name returned by the
Transactions API. Any Marketing Data or Signal fields named the same as
a standard Invoca Transactions API field will be returned by the API
rather than the standard field. If any field names have spaces in their
name, XML format will not be supported.

**Marketing Data & Signal can be accessed in two ways by Transactions
API**

1.  (JSON & XML formats only) By including <code>custom_data</code> as field in the <code>include_columns</code> parameter (e.g. <code>include_columns=transaction_id,start_time_local,custom_data</code>)
    a nested structure is returned containing all of the Marketing Data
    and Signals that were specified for the given transaction. Note:
    null values are not returned.

## Array of Marketing Data Objects

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 10%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr class="header">
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>name</td>
<td>String</td>
<td>Marketing Data Partner (API) Name or Signal Name. Up to 255 characters.</td>
</tr>
<tr class="even">
<td>data_type</td>
<td>String</td>
<td>One of: Signal, Category, Long Text, Short Text</td>
</tr>
<tr class="odd">
<td>source</td>
<td>String</td>
<td>One of: UserOverride, Api, Import, DynamicAttribution, LookupTable, Expression, Ivr, VirtualLine, AffiliateCampaign, AdvertiserCampaign, Affiliate, Advertiser, Network, AI, Default, Syndicated</td>
</tr>
<tr class="even">
<td>value</td>
<td>Boolean or String</td>
<td>For data_type = Signal: true, false or null. For all other data types it is the string value of the field. Category and Short Text are up to 255 characters. Long Text can be up to 10,000 characters.</td>
</tr>
</tbody>
</table>

Example response:

    [
      {
        "transaction_id": "FE7F3A51-11111111",
        "start_time_local": "2019-01-24 06:43:15 -07:00",
        "custom_data": [
          {
            "name": "Quote",
            "data_type": "Signal",
            "source": "Expression",
            "value": true
          },
          {
            "name": "utm_medium",
            "data_type": "Category",
            "source": "DynamicAttribution",
            "value": "Search"
          },
          {
            "partner_name": "gclid",
            "data_type": "Short Text",
            "source": "DynamicAttribution",
            "value": "198ab9a93f8c7348"
          }
        ]
      },
      {
        "transaction_id": "E9C4063A-22222222",
        "start_time_local": "2019-01-24 06:43:16 -07:00",
        "custom_data": [
          {
            "name": "Purchase Made",
            "data_type": "Signal",
            "source": "AI",
            "value": true
          },
          {
            "name": "utm_medium",
            "data_type": "Category",
            "source": "VirtualLine",
            "value": "Email"
          }
        ]
      }
    ]

1.  (All formats) Marketing Data and Signal fields can be accessed in
    the response by specifying the special <span
    class="title-ref">$invoca\_custom\_columns</span> constant in your
    <span class="title-ref">include\_columns</span> parameter, or
    mentioning specific fields that you want to include, e.g. <span
    class="title-ref">include\_columns=transaction\_id,start\_time\_local,utm\_medium,gclid,Quote,Purchase%20Made</span>.

Example response:

    [
      {
        "transaction_id": "FE7F3A51-11111111",
        "start_time_local": "2019-01-24 06:43:15 -07:00",
        "Quote": 1,
        "Purchase Made": null,
        "utm_medium": "Search",
        "gclid": "198ab9a93f8c7348"
      },
      {
        "transaction_id": "E9C4063A-22222222",
        "start_time_local": "2019-01-24 06:43:16 -07:00",
        "Quote": null,
        "Purchase Made": 1,
        "utm_medium": "Email",
        "gclid": null
      }
    ]

To also get the source of each Marketing Data & Signal field, specify
the special <span
class="title-ref">$invoca\_custom\_source\_columns</span> constant in
your <span class="title-ref">include\_columns</span> parameter. Doing
that would result in an additional ".source" field for every Marketing
Data & Signal field:

    [
      {
        "transaction_id": "FE7F3A51-11111111",
        "start_time_local": "2019-01-24 06:43:15 -07:00",
        "Quote": 1,
        "Quote.source": "Expression",
        "Purchase Made": null,
        "Purchase Made.source": null,
        "utm_medium": "Search",
        "utm_medium.source": "DynamicAttribution",
        "gclid": "198ab9a93f8c7348",
        "gclid.source": "DynamicAttribution"
      },
      {
        "transaction_id": "E9C4063A-22222222",
        "start_time_local": "2019-01-24 06:43:16 -07:00",
        "Quote": null,
        "Quote.source": null,
        "Purchase Made": 1,
        "Purchase Made.source": "AI",
        "utm_medium": "Email",
        "utm_medium.source": "VirtualLine",
        "gclid": null,
        "gclid.source": null
      }
    ]

To get the complete Signal view for a given call you can utilize the
<span class="title-ref">complete\_call\_id</span> field as the primary
ID. For every transaction (regardless of <span
class="title-ref">transaction\_type</span>), update your complete call
row as follows:

-   add any true Signals
-   remove any false Signals
-   ignore any null Signals (a null value for a Signal means the Signal
    was not applicable to that transaction but may have already been
    evaluated as true for the given call on any previous or subsequent
    transactions)
