Design Principles
=================

REST
----

All interfaces use [REST](http://en.wikipedia.org/wiki/REST). This makes
them easy to predict as they use HTTP and its existing verbs to Create,
Read, Update, and Delete objects. Any language that supports HTTP can
access these interfaces. Create and Update are idempotent operations.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th>Action</th>
<th>HTTP Verb</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Create</td>
<td>POST</td>
<td>Object is created. If it already exists, it is updated.</td>
</tr>
<tr class="even">
<td>Read</td>
<td>GET</td>
<td>Object is read.</td>
</tr>
<tr class="odd">
<td>Update</td>
<td>PUT</td>
<td>Object is created. If it already exists, it is updated.</td>
</tr>
<tr class="even">
<td>Delete</td>
<td>DELETE</td>
<td>Object is deleted. If the object has already been deleted, does nothing.</td>
</tr>
</tbody>
</table>

Status Codes
------------

HTTP Status codes are used to indicate success or failure. The set of
status codes returned by the Network Integration API are:

<table>
<colgroup>
<col style="width: 21%" />
<col style="width: 78%" />
</colgroup>
<thead>
<tr class="header">
<th>Status Code</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>200, 201</td>
<td>Success</td>
</tr>
<tr class="even">
<td>401</td>
<td>Failure. Access is not authorized.</td>
</tr>
<tr class="odd">
<td>403</td>
<td>Failure. Request arguments are invalid.</td>
</tr>
<tr class="even">
<td>404</td>
<td>Failure. The resource was not found.</td>
</tr>
<tr class="odd">
<td>500</td>
<td>Failure. Internal Service Error.</td>
</tr>
</tbody>
</table>

\* See the section on Error Handling for greater detail on response
bodies for failure codes.

Security
--------

HTTPS is required for all API requests.

Authentication is performed using one of several approaches.

The preferred approach is to use Invoca API tokens, which are created
and managed on the Manage API Credentials page of the platform.

Some API endpoints will accept HTTP(S) Basic Authentication, which
authenticates using a username and password in the request header.

Additionally, session login authentication is sufficient as an
alternative. This is so that you can test an API URL simply by logging
in to the platform first as a Network Role of ‘Super’ (full access user)
and then pasting the URL into the browser.

Using OAuth token to Access Invoca APIs
---------------------------------------

Requests are authenticated using HTTPS basic authentication with an
Invoca API Token, which can be created and managed on the Manage API
Credentials page in the platform.

Step by step guide using API token to access APIs
-------------------------------------------------

1.  Obtain OAuth 2.0 credentials from the Manage API Credentials.

    Visit your API Credentials page to obtain OAuth 2.0 credentials for
    your Network Integration API.

2.  Send the access token to an API.

After you obtain a token, include it in the HTTP header of your request,
as a URL string parameter, or as a key/value pair in the JSON body.

Example using API token as URL parameter:

`https://<vanity>.invoca.net/api/@@NETWORK_API_VERSION/advertisers.json?oauth_token=YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU`

Example using Curl to make an API call with token-based authentication:

    curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" 'https://\<vanity\>.invoca.net/api/@@NETWORK_API_VERSION/advertisers/1111.json' -d '{"oauth_token":"YbcFHZ38FNfptfZMB0RZ6dk9dOJCaCfU"}'

**Guidelines** \* Users should generate their own API tokens. Tokens
should be treated like passwords and not be emailed or transmitted over
other insecure mediums, nor should they be stored in a source code
repository. \* As a network user, you should not generate a token on
behalf of Advertisers or Publishers because tokens inherit the
privileges of the user generating it. \* Invoca does not use OAuth
refresh tokens.

Idempotency
-----------

Most interfaces are designed to be idempotent, meaning that it is
harmless to call them more than once with the same parameters.
Subsequent calls to an interface have no side effects, and return the
same result.

Self‐Correction
---------------

Most updates expect a complete copy of the object, making Update and
Create interchangeable. This means that errors tend to be corrected over
time. Campaign Terms are an exception to this due to their complexity
(see Advertiser Campaigns for more).

Versioning
----------

The API version is given as a date in the path.

Dedicated Subdomain
-------------------

All APIs are accessed through the dedicated subdomain of invoca.net that
is used for the network. For example, a network named "LeadTrust" might
be assigned leadtrust.invoca.net. We recommend that, when making your
API calls, you place your &lt;network\_id&gt; after the API version in
the url.

Request Parameter Format & Response Body Format
-----------------------------------------------

Previous versions of the API accepted form‐encoded style parameters in
the request and used XML as the output format. As of
@@NETWORK\_API\_VERSION, all new feature development has switched to
JSON format for both request and response. Previous XML functionality
will continue to be supported via the 2013‐03‐22 version of the API
(please contact <questions@invoca.com> for more information on previous
versions).
