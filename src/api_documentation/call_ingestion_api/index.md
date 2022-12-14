Call Ingestion API =================

The Call Ingestion API is used to submit call details along with a
recording URL for calls that were not live-connected and routed through
the Invoca Telephony platform.

Calls submitted through this API are available to all post-call
processing systems. This includes the Invoca transcription engine,
Signal AI, as well as the Dashboard and Reporting system.

Invoca post-call processing services are applied to calls based on
network and campaign settings. The campaign for the call is determined
by the *advertiser\_campaign\_id\_from\_network* parameter in the API.

Additionally, Signals and Custom Data related to the call can be
submitted during the initial call ingestion step. Please note that
Signals and Custom Data can also be applied in the future using the
`../signal_api/index`.

Signals can be any boolean value (e.g. sale, quote, etc), and Custom
Data can be any alpha-numeric value (e.g. account type, customer quality
score, etc).

Response Codes
==============

Remember to check the HTTP status code returned. This helps greatly when
debugging.

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr class="header">
<th>Status Code</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>201 Created</td>
<td>A new call creation request was successfully created.</td>
</tr>
<tr class="even">
<td>202 Accepted</td>
<td>The call creation request has already been received.</td>
</tr>
<tr class="odd">
<td>400 Bad Request</td>
<td>Attempted to make a request with an invalid API Version for route. Check the error message for any neccessary corrections</td>
</tr>
<tr class="even">
<td>401 Not Authorized</td>
<td>Invalid or missing oauth token.</td>
</tr>
<tr class="odd">
<td>403 Forbidden</td>
<td>Attempted to access an invalid resource or provided invalid data. Check the errors object in the response.</td>
</tr>
<tr class="even">
<td>409 Conflict</td>
<td>The <strong>external_call_unique_id</strong> in the request has already been used. Please contact the Invoca support team at <a href="mailto:questions@invoca.com">questions@invoca.com</a> for further assistance.</td>
</tr>
</tbody>
</table>

Request Parameters
==================

Passed in ???application/json??? format.

**Call Parameters**

These are the call details used when creating the call in the Invoca
platform.

> **Required**
>
> <span class="title-ref">external\_call\_unique\_id</span> The unique
> ID of the call from the external system. This field is required to be
> unique across all calls within a network that are submitted from
> external sources.
>
> <span class="title-ref">start\_time</span> This is the date and time
> when the call started on the call origination platform. Please see the
> **Timestamp Formats** section below for descriptions of supported
> timestamps.
>
> <span class="title-ref">destination\_phone\_number</span> DNIS in
> E.164 format +country national\_number; example: ???+18885551212???. UK
> and Spanish numbers are also supported. Their country codes are +44
> and +34 respectively.
>
> <span class="title-ref">calling\_phone\_number</span> ANI in E.164
> format +country national\_number; example: ???+18885551212???.
>
> <span class="title-ref">advertiser\_campaign\_id\_from\_network</span>
> The ID from network field on the advertiser campaign. The submitted
> call will be added to this campaign. *Please note that this campaign
> must be of type ExternalOnly* See
> `../network_integration/advertiser_campaigns//index` for more details.
>
> <span class="title-ref">call\_direction</span> The direction of the
> call flow. Accepted values: *inbound* or *outbound*.
>
> <span class="title-ref">recording\_url</span> The URL to the call
> recording. Please see the **Supported Recording Formats** and
> **Supported Recording Access Options** sections for more details.
>
> **Optional**
>
> <span class="title-ref">language\_code</span> The IETF language tag
> for the call transcription. This parameter can be processed only if
> multiple language processing is enabled for the network or it matches
> the default language code of the network. The default is given from
> the network attribute ("default\_language\_code") if it is set,
> otherwise "en-US". The following language codes are supported:
>
> <table>
> <colgroup>
> <col style="width: 16%" />
> <col style="width: 83%" />
> </colgroup>
> <thead>
> <tr class="header">
> <th>Language Code</th>
> <th>Description</th>
> </tr>
> </thead>
> <tbody>
> <tr class="odd">
> <td>en-US</td>
> <td>English (United States)</td>
> </tr>
> <tr class="even">
> <td>en-GB</td>
> <td>English (United Kingdom)</td>
> </tr>
> <tr class="odd">
> <td>es-ES</td>
> <td>Spanish (Spain)</td>
> </tr>
> <tr class="even">
> <td>fr-FR</td>
> <td>French (France)</td>
> </tr>
> </tbody>
> </table>
>
------------------------------------------------------------------------

**Signal Parameters**

Used to create the fields of a signal. The Signal name provided in a
request **must** already exist in your **Signal AI configuration**.

> **Required**
>
> <span class="title-ref">name</span> The name describing the signal
> event. For reporting a sale happened on a call, ???Sale??? is recommended.
> Other examples include ???Free Trial???, ???2yr Subscription???,
> ???Cancellation.??? This can be used elsewhere in the system and should be
> a small list of values meaningful to your organization. Names are
> matched case-insensitively.
>
> **Optional**
>
> <span class="title-ref">value</span> True or false as to whether the
> signal was met or not. Defaults to true if not passed. Can be a string
> ???true??? or ???false???, or 1 (true) or 0 (false), Yes (true), or No
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

Endpoint:

`https://invoca.net/api/@@CALL_INGESTION_API_VERSION/calls.json`

Timestamp Formats
=================

The following formats are supported for the <span
class="title-ref">start\_time</span> parameter.

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

Example POST Request Using cURL
===============================

You can send call results to Invoca servers in the form of an HTTP POST
or PUT. cURL is recommended because it is simple and preinstalled on
most machines. Below is an example of a cURL request:

    curl --location --request POST 'https://invoca.net/api/@@CALL_INGESTION_API_VERSION/calls.json?oauth_token=<oauth_token>' \
    --header 'Content-Type: application/json' \
    --data-raw '
    {
      "call": {
        "external_call_unique_id": "10002",
        "start_time": "2022-03-25 09:31:29",
        "destination_phone_number": 9093900003,
        "calling_phone_number": 8779257384,
        "advertiser_campaign_id_from_network": 86,
        "call_direction": "inbound",
        "recording_url": "<CALL RECORDING URL>"
      }
    }'

Below is the same example as above with the OAuth Token passed in via
the request headers:

    curl --location --request POST 'https://invoca.net/api/@@CALL_INGESTION_API_VERSION/calls.json' \
    --header 'Content-Type: application/json' \
    --data-raw '
    {
      "call": {
        "external_call_unique_id": "10001",
        "start_time": "2022-03-25 09:31:29",
        "destination_phone_number": 9093900003,
        "calling_phone_number": 8779257384,
        "advertiser_campaign_id_from_network": 86,
        "call_direction": "inbound",
        "recording_url": "<CALL RECORDING URL>"
      },
      "oauth_token": "<oauth_token>"
    }'

Errors
======

The Call Ingestion API clearly identifies errors when a request cannot
be processed.

**Invalid Inputs**

If invalid parameters are passed, an error will be returned with a 403
response code.

For example, if a **call** or parameters within the call are not passed
in the request, the following error will be returned. If there are
multiple issues with the request, we will do our best to package all of
the issues together in one response message.

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "RecordInvalid",
        "invalid_data": "Validation failed: 'call' is required"
      }
    }

------------------------------------------------------------------------

**Permission Errors**

If you do not have access to the Call Ingestion API, the following error
will be returned with a 403 response code. *Please note that the Call
Ingestion API is enabled per network. Please contact the Invoca support
team at questions@invoca.com for setup assistance.*

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "UnauthorizedOperation",
        "invalid_data": "You do not have permissions to perform the requested operation."
      }
    }

------------------------------------------------------------------------

**Authorization Errors**

If you do not have access to the
**advertiser\_campaign\_id\_from\_network** an error will be returned
with a 403 response code. For example, if you pass an
**advertiser\_campaign\_id\_from\_network** that you do not have access
to, the following error will be returned.

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "UnauthorizedAdvertiser",
        "invalid_data": "You do not have access to this advertiser"
      }
    }

------------------------------------------------------------------------

**Campaign Configuration Related Errors**

In order to fully utilize the Call Ingestion API, there are some
configuration requirements for the campaign that the call is being
submitted under. Here's a list of those requirements:

> -   Campaigns must be setup with a campaign type of **ExternalOnly**.
> -   Campaigns need to be have either the **Signal AI** product feature
>     or at least one Voice Signal enabled. This will enable
>     transcription service on the submitted call.

If any of these settings are misconfigured you'll see error message
similar to the examples below. *Please contact the Invoca support team
at questions@invoca.com for setup assistance.*

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "call.advertiser_campaign_id_from_network",
        "invalid_data": "campaign must be for external calls only"
      }
    }

**Response (403 Forbidden):**

    {
      "errors": {
        "class": "call.advertiser_campaign_id_from_network",
        "invalid_data": "campaign must have transcription enabled"
      }
    }

Supported Recording Formats
===========================

The default call recording format on the Invoca platform is 16-bit PCM
encoded [WAV](https://en.wikipedia.org/wiki/WAV) files with an 8 kHz
sample rate. The Call Ingestion API supports
[WAV](https://en.wikipedia.org/wiki/WAV) and
[MP3](https://en.wikipedia.org/wiki/MP3) file formats. However, the
Invoca Audio Processing system will upsample or downsample accordingly
into our default call recording format.

All call recordings are required to be in dual-channel or stereo format.
The call recording of an inbound call on the Invoca platform has the
caller channel on channel 0 and the agent audio on channel 1. For all
calls submitted via the Call Ingestion API, we will normalize the
channels to match the Invoca call record channel layout.

The **call\_direction** field will determine how the recording is
normalized:

> <span class="title-ref">inbound</span> The audio processing system
> will assume that the call recording matches the Invoca default with
> the caller channel on channel 0 and the agent channel on channel 1.
>
> <span class="title-ref">outbound</span> The audio processing system
> will assume that the call recording is the opposite of the Invoca
> dafault. The audio procesing system will normalize the call recording
> by swapping the channels.

If the Invoca Audio Processing system finds any call recording format
problems then a message will be sent via email notifying your Invoca
Customer Success Manager (CSM) who will then reach out to help resolve
any issues. Please see the **Call Processing Error Notifications**
section for more details.

Supported Recording Access Options
==================================

After a new call is successfully submitted via the API, a message is
sent to notify the Invoca Audio Processing system to download the
recording and begin processing. The audio processing system attempts to
download the recording via a standard network request using **wget** or
**curl**.

Call Recording URLs will need to be accessible to the Invoca Audio
processing system. There are a couple of ways to configure your
recordings to support this requirement:

> <span class="title-ref">Presigned URL</span> If the call recording is
> hosted in [AWS S3](https://docs.aws.amazon.com/s3/index.html) you can
> use [presigned
> URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).
> In this approach, a unique token is created and appended to the URL
> that grants access for a predefined period of time to the system in
> which you provide the URL.
>
> <span class="title-ref">Public URL</span> In this approach, the call
> recording would be able to be downloaded without requirement of access
> credentials or API keys.

If the Invoca Audio Processing system is unable to succesfully download
and process the call recording then a message will be sent via email
notifying your Invoca Customer Success Manager (CSM) who will then reach
out to help resolve any issues. Please see the **Call Processing Error
Notifications** section for more details.

Call Processing Error Notifications
===================================

*Details on this process coming soon*

------------------------------------------------------------------------

Retrying Failed Calls
=====================

*Details on this process coming soon*
