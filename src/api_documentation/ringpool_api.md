Ringpool API (Legacy) ========

The RingPool API allocates a dynamic, trackable promo phone number from
a RingPool. A valid call to the RingPool API returns a promo number and
a formatted click-through URL.

Example API URL:

`https://<NETWORK>.invoca.net/api/@@RINGPOOL_API_VERSION/ring_pools/16/allocate_number.xml?ring_pool_key=<KEY>&site=<VALUE1>&location=<VALUE2>`

&lt;NETWORK&gt;.invoca.net is the vanity URL for your platform. Note
that your platform may exist on invoca.net or ringrevenue.com, and both
are supported.

&lt;RingPool\_ID&gt; is a unique identifier for the RingPool.

&lt;KEY&gt; is the RingPool key, which is provided through the RingPool
wizard UI on the platform and should be kept a secret. The parameters
are explained in detail below in the “API Parameters” section.

The parameter names should match those chosen in the RingPool wizard, or
you can use generic parameter names “param1”, “param2”, etc. Here is the
same API URL with the generic parameter names:

`https://<NETWORK>.invoca.net/api/@@RINGPOOL_API_VERSION/ring_pools/16/allocate_number.xml?ring_pool_key=<KEY>&param1=<VALUE1>&param2=<VALUE2>`

**Note:** To access the campaign RingPool’s API URL navigate to the
Campaign Summary’s RingPool tab and click “get api url” under Actions.

![image](../_static/ringpool_actions.png)

<br />

![image](../_static/ringpool_get_api_url.png)

Response Formats
================

The response can be in any of these formats: **xml**, **json** or
**csv**. To choose the format, change the “.xml” shown in the URL to
“.json” or “.csv”. Below are example responses for each format:

**xml**

    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <PromoNumberFormatted>888-390-6665</PromoNumberFormatted>
      <PromoNumber>8883906665</PromoNumber>
      <TrackingUrl> https://invoca.net/c/1/14-11-109?us=http%3A%2F%2Fwww2.invoca.net%2Fdemo%2F8x8_staging.html%3Fsid%3D8883906665%26PPCPN%3D8883906665</TrackingUrl>
    </Response>

**json**

    {"promo_number_formatted":"888-390-6665","tracking_url":" https://invoca.net/c/1/14-11-109?us=http%3A%2F%2Fwww2.invoca.net.com%2Fdemo%2F8x8_staging.html%3Fsid%3D8883906665%26PPCPN%3D8883906665","promo_number":"8883906665"}

**csv**

    PromoNumberFormatted,PromoNumber,TrackingUrl
    888-390-6665,8883906665, https://invoca.net/c/1/14-11-109?us=http%3A%2F%2Fwww2.invoca.net%2Fdemo%2F8x8_staging.html%3Fsid%3D8883906665%26PPCPN%3D8883906665

As an advertiser, you can allocate promo numbers from your RingPool on
behalf of your affiliates in order to credit them for calls. Just
include an affiliate id in the query string of the API URL. Note that
the parameter name depends on your network and the value must match what
is set on the affiliate account. Here is an example URL for tracking
affiliate 5567 on a network that calls the affiliate id a pid:

`https://<NETWORK>.invoca.net/api/@@NETWORK_API_VERSION/ring_pools/16/allocate_number.xml?ring_pool_key=<KEY>&pid=5567&sid=adwords`

Errors
======

The RingPool API clearly identifies errors when a request can not be
processed. If the number pool is exhausted, the API still succeeds
because an overflow number is returned. If a parameter is not passed
correctly, an XML error response is returned as shown below:

    <?xml version="1.0" encoding="UTF-8"?>
    <Error>
      <Class>InvalidKey</Class>
      <Message>API Key 'A329F4DC002168' is not valid for resource '1'</Message>
    </Error>

Or for json or csv, the following text is returned:

<span class="title-ref">InvalidKey: API Key 'A329F4DC002168' is not
valid for resource '1'</span>

If a system error occurs, an InternalServiceError is returned in XML (or
simple text for json or csv) with an integer error handle. Contact
<questions@invoca.com> to determine the root cause of the error.

RingPool Types
==============

All 6 RingPool types are supported by the API:

Custom

Custom + Search keywords

Search Engine + Keywords

Search Engine + Keyword ID

Referral Domains

Referral Domains + search

API Parameters
--------------

The API supports the following parameters:

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 78%" />
</colgroup>
<thead>
<tr class="header">
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>ring_pool_key=</td>
<td>The required authentication key unique for each RingPool.</td>
</tr>
<tr class="even">
<td>param1=</td>
<td>[Custom RingPools only] The first custom parameter of a Custom RingPool. This parameter can also be represented by the custom name.</td>
</tr>
<tr class="odd">
<td>param2=</td>
<td>[Custom RingPools only] The second custom parameter of a Custom RingPool.</td>
</tr>
<tr class="even">
<td>…</td>
<td></td>
</tr>
<tr class="odd">
<td>param10=</td>
<td>[Custom RingPools only] The 10th custom parameter of a Custom RingPool.</td>
</tr>
<tr class="even">
<td>search_engine=</td>
<td>[All Search RingPool types] The search engine name used to process the search query.</td>
</tr>
<tr class="odd">
<td>search_keywords=</td>
<td>[All Search RingPool types] The search query that the user searched for.</td>
</tr>
<tr class="even">
<td>search_keyword_id=</td>
<td>[Keyword ID Search RingPool only] The keyword ID that is associated to the query string.</td>
</tr>
<tr class="odd">
<td>landing_page=</td>
<td>[Optional] The landing page URL to be shown in reporting.</td>
</tr>
<tr class="even">
<td>referrer=</td>
<td>[All Referral Domain types, otherwise Optional] Can be used instead of search_engine= and search_keyword. Those values will be inferred by parsing the referrer URL. Referral Domains + search will use referrer as the Traffic Source if either the search_engine or search_keywords are omitted.</td>
</tr>
<tr class="odd">
<td>mobile_click_to_call=</td>
<td>[Optional] Option to return mobile enabled links that populate the smartphone’s dialer when clicked.</td>
</tr>
<tr class="even">
<td>&lt;NETWORK_AFFILIATE_ID_NAME&gt;</td>
<td>[Optional] This parameter name is determined by the network and is used to allocate a promo number on behalf of the publisher. For example, pid=2341</td>
</tr>
</tbody>
</table>

Endpoint:

`https://invoca.net/api/@@RINGPOOL_API_VERSION/ring_pools/16/allocate_number.xml?ring_pool_key=<KEY>&param1=<VALUE1>&param2=<VALUE2>`
