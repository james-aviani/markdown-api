Signal API
==========

The Signal API is used to apply Signals and/or Custom Data Fields to
specific calls (transactions) after the call has occurred.

This can be very helpful if you need to apply specific data from other
systems if that data isn't available during the call.

Signals can be any boolean value (e.g. sale, quote, etc), and Custom
Data can be any alpha-numeric value (e.g. account type, customer quality
score, etc).

Response Codes
--------------

Remember to check the HTTP status code returned. This helps greatly when
debugging.

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 70%" />
</colgroup>
<thead>
<tr class="header">
<th>Status Code</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>200 OK</td>
<td>Request was accepted with all Signals and Custom data applied properly</td>
</tr>
<tr class="even">
<td>201 Created</td>
<td>Request was accepted with the <strong>call_in_progress</strong> parameter set to true</td>
</tr>
<tr class="odd">
<td>400 Bad Request</td>
<td>Attempted to make a request with an invalid API Version for route. Check the error message for any corrections to make</td>
</tr>
<tr class="even">
<td>401 Not Authorized</td>
<td>Invalid or missing oauth token</td>
</tr>
<tr class="odd">
<td>403 Forbidden</td>
<td>Attempted to access an invalid resource or provided invalid data. Check the errors object in the response.</td>
</tr>
<tr class="even">
<td>404 Not Found</td>
<td>Provided a transaction ID that was not found, or if using call start time and other search filters, no matching call found</td>
</tr>
</tbody>
</table>

Request Parameters
------------------

Passed in “application/json” format.

**Search Parameters**

Used to find the call associated with the signal.

> **Required**
>
> <span class="title-ref">transaction_id</span> The ID of the
> transaction (Call leg) being reported on.
>
> or
>
> <span class="title-ref">call\_record\_id</span> The ID of the complete
> call being reported on.
>
> or
>
> <span class="title-ref">call\_start\_time</span> The start time does
> not have to be exact since clocks will not be perfectly synchronized.
> We will find the closest match (in combination with
> **duration\_in\_seconds**, if provided). See **Timestamp Formats**
> section below for descriptions of supported timestamps.
>
> Note: If using **call\_start\_time** to match, instead of
> **transaction\_id**, one or more of the following optional parameters
> is highly recommended. The optional parameters are ignored when using
> the **transaction\_id**:
>
> **Optional**
>
> <span class="title-ref">calling\_phone\_number</span> ANI in E.164
> format +country national\_number; example: ‘+18885551212’.
>
> <span class="title-ref">duration\_in\_seconds</span> Length of the
> call. Used for finding the call that drove the sale. Like start time,
> duration\_in\_seconds does not have to be exact, we use it to find the
> closest match.
>
> <span class="title-ref">advertiser\_id\_from\_network</span> ID from
> network field on advertiser; only calls within this advertiser will be
> considered (only allowed when reporting as network user, and
> advertiser must be in same network).
>
> <span class="title-ref">advertiser\_campaign\_id\_from\_network</span>
> ID from network field on advertiser campaign; only calls within this
> advertiser campaign will be considered (campaign must be in the
> organization accessed via API).
>
> <span class="title-ref">network\_id</span> ID of the network.

------------------------------------------------------------------------

**Signal Parameters**

Used to create the fields of a signal.

> **Required**
>
> <span class="title-ref">name</span> The name describing the signal
> event. For reporting a sale happened on a call, “Sale” is recommended.
> Other examples include “Free Trial”, “2yr Subscription”,
> “Cancellation.” This can be used elsewhere in the system and should be
> a small list of values meaningful to your organization. Names are
> matched case-insensitively, but we will preserve and use the casing of
> the first time the signal name is reported.
>
> **Optional**
>
> <span class="title-ref">partner\_unique\_id</span> Unique identifier,
> to distinguish between updating an existing signal (for example
> correcting a sale that was reported) versus adding a second sale to
> the call (for example a reservation made while on the call and then an
> add on item purchased later). Note: this ID only needs to be unique
> within the given transaction and **name**, so it can be as simple as
> “1”, “2”… or it can be a globally unique ID if desired. Defaults to
> empty string if not passed.
>
> <span class="title-ref">occurred\_at\_time</span> This allows batching
> of signal results at a later time and still capture the exact time the
> signal event happened. See **Timestamp Formats** section below for
> descriptions of supported timestamps. Defaults to the time of the API
> request if not provided.
>
> <span class="title-ref">revenue</span> Money with up to 2 decimal
> places (period separated). Assumed to be in the same currency as the
> organization that owns the signal being reported. Defaults to null if
> not passed. (Recommended to omit parameter if no sale occurred,
> instead of passing 0). Do not include formatting such as currency
> symbol or separators (i.e. commas).
>
> <span class="title-ref">value</span> True or false as to whether the
> signal was met or not. Defaults to true if not passed. Can be a string
> ‘true’ or ‘false’, or 1 (true) or 0 (false), Yes (true), or No
> (false). These values are not case sensitive.

------------------------------------------------------------------------

**Custom Data Parameters**

Apply Custom Data values to a call based on your Custom Data
configuration.

The Custom Data Fields provided in a request **must** already exist in
your [Custom Data
Configuration](https://www2.invoca.net/customer_data_dictionary/home)

> **Required**
>
> <span class="title-ref">name</span> The Partner (API) Name of the
> Custom Data Field you want to apply a value to. Visit your [Custom
> Data Management
> Page](https://www2.invoca.net/customer_data_dictionary/home) to view
> your available Custom Data Fields.
>
> <span class="title-ref">value</span> The value you would like to apply
> to the associated Custom Data Field for this call.

------------------------------------------------------------------------

**Additional Parameters**

> **Required**
>
> <span class="title-ref">oauth\_token</span> API token for
> authentication. Can be specified in the body or header of the request.
>
> **Optional**
>
> <span class="title-ref">call\_in\_progress</span> True or false as to
> whether the call may still be in progress. Invoca will immediately
> return a 201 and empty response body when this is set to true. When
> the call finishes, Invoca will apply the signal. Defaults to false.
>
> Note: **call\_in\_progress** can be passed, even when the call has
> already finished. However, Invoca will only check for required fields
> and all other errors will not be returned. It is highly recommended to
> use **transaction\_id** in the search parameters. If
> **call\_start\_time** is used, please provide the
> **calling\_phone\_number**, as well as any other information you can
> provide, to help avoid matching with an earlier call.

Endpoint:

`https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json`

Timestamp Formats
-----------------

The following formats are supported for both <span
class="title-ref">call\_start\_time</span> and <span
class="title-ref">occurred\_at\_time</span>.

All examples below correspond to a date time of **11 April 2016** at **1
PM Pacific Time**.

**Epoch:** 10 digit timestamp in UTC seconds since 1/1/70, also known as
Unix time\_t. UTC milliseconds since 1/1/70 (which is the default in
Javascript) are also supported, i.e. a 13 digit start time.

> Example (10 digits): **1460404800**
>
> Example (13 digits): **1460404800000**

**Compressed:** 17 digit timestamp always parsed in UTC.

> Format: **YYYYMMDDHHMMSSsss**
>
> Example: **20160411130000000**

**ISO 8601:** Timestamp with +/- UTC offset or Z to indicate time is in
UTC. Milliseconds are optional.

> Format: **YYYY/MM/DDTHH:MM:SS.sss+hh:mm**
>
> Example (UTC offset of +3 hours): **2016/04/11T23:00:00.000+03:00**
>
> Example (UTC offset of -7 hours): **2016/04/11T13:00:00.000-07:00**
>
> Example (UTC): **2016/04/11T20:00:00.000Z**
>
> Example (no milliseconds): **2016/04/11T13:00:00-07:00**

**Excel Compatible:** Timestamp parsed in the timezone of the **oauth
token**'s associated network. Milliseconds are optional.

> Format: **YYYY/MM/DD HH:MM:SS.sss AM/PM**
>
> Example: **2016/04/11 13:00:00.000 PM**
>
> Example (no milliseconds): **2016/04/11 13:00:00 PM**
>
> **Note:** The file upload user interface includes a timezone dropdown
> feature, which allows users to select which timezone this format is
> parsed in. Use the following to format Excel date cells: **yyyy/mm/dd
> hh:mm:ss.000 AM/PM**.

Example POST Request Using cURL
-------------------------------

You can send call results to Invoca servers in the form of an HTTP POST
or PUT. cURL is recommended because it is simple and preinstalled on
most machines. Below is an example of a cURL request:

    curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signals": [{"name": "sale","partner_unique_id": "1","occurred_at_time": "1440607313","revenue": "100.00","value": "true"}], "custom_data": [{"name": "channel", "value": "Paid Search"}],"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json

Below is the same example as above with the OAuth Token passed in via
the request headers:

    curl -k -H "Content-Type: application/json" -H "Authorization: <YOUR OAUTH TOKEN>" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signals": [{"name": "sale","partner_unique_id": "1","occurred_at_time": "1440607313","revenue": "100.00","value": "true"}], "custom_data": [{"name": "channel", "value": "Paid Search"}]}'  https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json

Errors
------

The Signal API clearly identifies errors when a request cannot be
processed.

**Invalid Inputs**

If invalid parameters are passed, an error will be returned with a 403
response code.

For example, if a **transaction\_id** or **call\_start\_time** are not
passed in the request, the following error will be returned.

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "InvalidInput",
        "invalid_data": "transaction_id, call_record_id, or call_start_time must not be empty"
      }
    }

If there are multiple issues with the request, we will do our best to
package all of the issues together in one response message.

**Example Bad Request**

    {
      "search": {
        "transaction_id": "0000000-0000000A"
      },
      "signals": [
        {
          "name": "sale",
          "custom_parameter_1": "12345"
        },
        {
          "revenue": "1,000",
          "value": "true"
        },
        {
          "name": "sale",
          "description": "duplicate"
        }
      ],
      "custom_data": [
        {
          "value": "no_name"
        },
        {
          "name": "no_value"
        }
      ],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "InvalidInput",
        "invalid_data": "The following params in 'signals' are not supported in this version: custom_parameter_1, description; signals[1] 'name' is required; 'name' for signals[0] and signals[2] must be unique; 'name' for custom_data[0] is required; 'value' for custom_data[1] is required"
      }
    }

------------------------------------------------------------------------

**Record Invalid Error**

In the case that we are not able to find all of the issues in the
request before processing, we will package up any errors that occur
during processing with the following error response:

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "RecordInvalid",
        "invalid_data": "Validation failed: Signals are limited to 100"
      }
    }

------------------------------------------------------------------------

**Record Not Found Error**

If no record is found for the search parameters that are passed in the
request, an error will be returned with a 404 response code. For
example, if a call cannot be found for the search parameters passed, the
following error will be returned.

**Response (404 Not Found):**

    {
      "errors": {
        "class": "RecordNotFound",
        "invalid_data": "No call found. Please refer to the documentation."
      }
    }

------------------------------------------------------------------------

**Permission Errors**

If you do not have access to the Signal API, the following error will be
returned with a 403 response code.

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "UnauthorizedOperation",
        "invalid_data": "You do not have permissions to perform the requested operation."
      }
    }

------------------------------------------------------------------------

**Authorization Errors**

If you do not have access to the **advertiser\_id\_from\_network**,
**advertiser\_campaign\_id\_from\_network**, or the **network\_id** an
error will be returned with a 403 response code. For example, if you
pass an **advertiser\_id\_from\_network** that you do not have access
to, the following error will be returned.

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "UnauthorizedAdvertiser",
        "invalid_data": "You do not have access to this advertiser"
      }
    }

Signal Transactions Rollup
--------------------------

**Note**: This specific section only applies if you have begun using the
Signal Transactions Rollup feature. This will only apply to calls that
occur **after** the date that this feature is enabled. If you are unsure
about whether you are using this feature, please contact the Invoca
Customer Successs team.

All Signals and Custom Data within a single request will be grouped
together based on the value of the field **partner\_unique\_id**. There
will be a single transaction for each group created. These new
transactions will have the transaction type *Post Call Event*.

A maximum of 10 transactions can be applied for a single request.
However, this limit does not apply to the number of Signals or Custom
Data included in a single grouping. See the **Best Practices** section
for understanding why this limit is enforced.

Request Parameter changes:

-   The existing fields **partner\_unique\_id** and
    **occurred\_at\_time** can now be specified at the top-level of a
    request following the same formatting described above. This will be
    applied to all signals and custom data in the request.
-   These fields can still be specified inline with each signal, but
    signals with different values for **partner\_unique\_id** will be
    not be grouped together.
-   If specified inline for a specific signal, it will take precedence
    for that signal over the top-level value.
-   Custom Data fields will be grouped together into a Post Call Event
    transaction using the top-level **partner\_unique\_id** (this may be
    omitted and will default to the empty string).

Using a single **partner\_unique\_id** at the top level, such that it
will be used for all Signals and Custom Data, is **highly recommended**.
This will minimize the number of transactions that show up in the
Transaction Detail reports and the Transactions API.

Response Parameter changes:

-   The **signals** array will contain an entry for each Post Call Event
    Transaction created.
-   Since Signals may be grouped, the name and value of each Post Call
    Event Transaction will be a comma-separated list corresponding to
    the signals grouped within.
-   Custom Data fields will not be displayed here, but will be applied
    to the Post Call Event transaction corresponding the the top-level
    **partner\_unique\_id**

**Example Request**

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "partner_unique_id": "1",
      "occurred_at_time": "2019-02-14T13:30:04Z",
      "signals": [{
        "name": "Quote", "revenue": "100.0"
      }, {
        "name": "Appointment Made", "value": "false"
      }],
      "custom_data": [{
        "name": "line_of_business",
        "value": "Great Deals"
      }, {
        "name": "utm_source",
        "value": "google.com"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Example Response**

    {
      "signals": [{
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "Quote,Appointment Made",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1550179818",
        "occurred_at_time": "2019-02-14T13:30:04Z",
        "revenue": "100.0",
        "value": "true,false"
      }],
      "call": {
        "transaction_id": "00000000-00000001",
        "corrects_transaction_id": null,
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

**Additional Errors**

We no longer support specifying **revenue** at the top level header of
the request. Revenue must be specified on each Signal.

    {
      "errors": {
        "class": "RecordInvalid",
        "invalid_data": "Revenue must be specified on each Signal instead of at the top level header of the request"
      }
    }

Updates and Idempotency
-----------------------

**Notice for users of the Signal Transactions Rollup feature:**

If you are using the Signal Transactions Rollup feature (see section
*Signal Transactions Rollup* above), some of the Updates and Idempotency
information below has changed slightly.

Signals and Custom Data are considered unique by **partner\_unique\_id**
only; name is *not* considered. Signals and Custom data are grouped into
transactions according to **partner\_unique\_id**. If a request supplies
the same **partner\_unique\_id** as a previous transaction, the previous
transaction will be updated with the content of the new request.

The information below regarding Updates and Idempotency still applies,
but with this distinction.

**Signals:**

Signals are considered unique by a combination of **name** and
**partner\_unique\_id**. For example, if you make two requests with the
same **name** and **partner\_unique\_id**, the other params in the
second request will update the original signal’s fields

Therefore, if you make two requests with the same params, the signal
will not be updated nor will a new one be made. It is safe then to
re-post API requests without fear of duplicate data.

If you change the **partner\_unique\_id**, a second signal of the same
name will be associated with the transaction.

------------------------------------------------------------------------

Example of creating two signals (on a single call) then updating one

**HTTP POST parameters** - first request (creates both signals, which
are valid due to unique **partner\_unique\_id**):

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signals": [{
        "name": "Quote",
        "partner_unique_id": "1"
      }, {
        "name": "Quote",
        "partner_unique_id": "2"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Response (200 OK):**

    {
      "signals": [{
        "transaction_id": "00000000-0000000A",
        "corrects_transaction_id": null,
        "name": "Quote",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1440607999",
        "occurred_at_time": "2015-08-26T16:53:19Z",
        "value": "true"
      }, {
        "transaction_id": "00000000-0000000B",
        "corrects_transaction_id": null,
        "name": "Quote",
        "partner_unique_id": "2",
        "occurred_at_time_t": "1440608000",
        "occurred_at_time": "2015-08-26T16:53:20Z",
        "value": "true"
      }],
      "call": {
        "transaction_id": "00000000-00000001",
        "corrects_transaction_id": null,
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

**HTTP POST Parameters** - second request (updates first request):

    {
      "search": {
        "transaction_id": "00000000-00000001"
      },
      "signals": [{
        "name": "Quote",
        "partner_unique_id": "1"
      }],
      "oauth_token": "<YOUR OAUTH TOKEN>"
    }

**Response (200 OK):**

    {
      "signals": [{
        "transaction_id": "00000000-0000000C",
        "corrects_transaction_id": "00000000-0000000A",
        "name": "Quote",
        "partner_unique_id": "1",
        "occurred_at_time_t": "1440607999",
        "occurred_at_time": "2015-08-26T16:53:19Z",
        "value": "true"
      }],
      "call": {
        "transaction_id": "00000000-00000001",
        "corrects_transaction_id": null,
        "start_time_t": "1435993200",
        "call_start_time": "2015-07-04T07:00:00Z"
      }
    }

Note: even though this second request was an update to the first and
will appear in reports as updating the first signal, a new signal
transaction ID is returned. This is because a correction has been made
to the first signal, and this new transaction ID is what will appear in
webhooks and the Transactions API.

------------------------------------------------------------------------

**Custom Data:**

Custom Data fields are considered unique by their **name** only.

Each request made will apply a correction to the target call and
override any existing Custom Data Field values for the provided fields.

Therefore, subsequent requests will create corrections and appear as
though the original call was updated.

Note: Any signals provided or associated previously with the call with
also reflect these new Custom Data values.

Best Practices
--------------

**Applying Many Signals to a Single Call:** Batching your Signal
applications into a single request is the most performant way to apply
many signals. You may not include more than 10 signals in a single
request. If you need to apply *more* than 10, batch your requests into
as few groups of 10 as possible.

Note: As signals are applied to the call, the response time of the API
will increase with each signal added. In extreme cases, this can cause
the request time to exceed the 120 seconds API timeout resulting in an
504 Gateway Timeout HTTP response.

    # FAST: Apply multiple signals in a single request
    curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signals": [{"name": "sale","partner_unique_id": "1","occurred_at_time": "1440607313","revenue": "100.00","value": "true"},{"name": "Quality Call","value": "true"},{"name": "Appointment Made","partner_unique_id": "1","occurred_at_time": "1440607313","value": "false"}], "custom_data": [{"name": "channel", "value": "Paid Search"}],"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json

    # SLOW: Attempt to apply multiple signals in multiple requests
    curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signals": [{"name": "sale","partner_unique_id": "1","occurred_at_time": "1440607313","revenue": "100.00","value": "true"}], "custom_data": [{"name": "channel", "value": "Paid Search"}],"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json
    curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signals": [{"name": "Quality Call","value": "true"}], "custom_data": [{"name": "channel", "value": "Paid Search"}],"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json
    curl -k -H "Content-Type: application/json" -X POST -d '{"search": {"transaction_id": "00000000-00000001"},"signals": [{"name": "Appointment Made","partner_unique_id": "1","occurred_at_time": "1440607313","value": "false"}], "custom_data": [{"name": "channel", "value": "Paid Search"}],"oauth_token": <YOUR OAUTH TOKEN>}'  https://invoca.net/api/@@SIGNAL_API_VERSION/transactions.json

Migration Notes
---------------

**Note**: If using the Signal Transactions Rollup feature (see section
*Signal Transactions Rollup* above), this section can be ignored.

For upgrading from version `2017-02-01`

-   URL path was changed
-   Added **custom\_data** key, an array of objects for setting custom
    data values
-   **signal** key was changed to **signals**, which is now an array of
    the same objects with the following changes
    -   Removed support for **custom\_parameter\_1**,
        **custom\_parameter\_2**, **custom\_parameter\_3** (use new
        **custom\_data** outer key instead)
    -   Removed support for **sale\_amount** (use **revenue** instead)
    -   Removed support for **description** (recommended to use Custom
        Data Fields instead)
