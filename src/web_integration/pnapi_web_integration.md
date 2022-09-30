SolutionsJS Web Integration (Deprecated)
========================================

<div style="padding: 15px; background-color: #fff3cd; color: #333;"><p>
  <b>Notice:</b> Invoca Tags</a> is the supported way for setting up web integration (which internally uses the InvocaJS library, formerly known as SolutionsJS).
  View the <a href="https://community.invoca.com/t5/call-attribution/how-to-configure-and-deploy-your-invoca-tag-with-the-invoca-tag/ta-p/465">Invoca Tags support article</a> for installation instructions.
</p></div>

Installation Instructions (Deprecated)
--------------------------------------

Install this generalized code just above the closing `</body>` tag of
your website.

    <!-- Begin Invoca Integration -->
    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
    <script type="text/javascript">
      Invoca.PNAPI.integration({
        networkId: YOUR_NETWORK_ID,
        numberSelector: ".YOUR_CLASS_SELECTOR"
      });
    </script>
    <!-- End Invoca Integration -->

Update `networkId` and `numberSelector` to match your Invoca Network and
current web page settings.

**Note:**

You may find your `networkId` pre-populated in sample code available in
the Invoca platform:

*Choose Tools gear and select Web Integration.*

Requirements
------------

1.  Network is PNAPI enabled.
2.  RingPools are type: "Custom".
3.  Invoca Web Integration code installed on page.
4.  Phone numbers on webpage tagged with a shared numberSelector class
    (Accepts multiple slectors).
5.  An Invoca Campaign ID to associate with each number on the page (Or
    a Campaign ID Override).

Identifying a Campaign
----------------------

There are three methods to identify an Invoca Campaign on your web page,
which follow an order of precedence.

1. **campaignIdOverrideParam**: Specify a query string parameter's name,
the value of which will be used as the Invoca Campaign ID for all phone
numbers in a given session.

2. **destinationAsId**: When true, the phone number's digits (special
characters stripped) from the <span
class="title-ref">numberSelector</span> will be used as the Campaign ID.

3. **data-invoca-campaign-id**: When no override is passed, a user may
assign individual Invoca Campaign IDs to a specific phone number's HTML
element using the `data-invoca-campaign-id` attribute.

4. **defaultCampaignId**: With no override, a `defaultCampaignId` can be
passed to the `Invoca.PNAPI.integration` settings and will fill in the
gaps wherever no `data-invoca-campaign-id` is found. If there are no
data attributes or overrides, this value will apply to all phone numbers
on the page.

Additionally, the `defaultCampaignId` can be assigned dynamically with
JavaScript based upon the page's environment and variables.

Client Side Parameters
----------------------

*Note:* Any parameter value can be populated with a JavaScript variable.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th>Required parameters:</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>networkId</td>
<td>String</td>
<td>Invoca Network ID</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th>Required: One of the following</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>numberSelector</td>
<td>String</td>
<td>CSS selector for phone number HTML elements Accepts one or many like so <span class="title-ref">".invocaNumber, .phoneNumber"</span></td>
</tr>
<tr class="even">
<td>numberToReplace</td>
<td>String or Hash</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>Specify which number(s) to replace. Can accept one or many like so: <span class="title-ref">"888-999-1010, 777-888-9999"</span>. Optionally accepts a hash with the number as a key name, and campaignId as it's value like so:</p>
<p><span class="title-ref">{ "888-999-1010": 'campaignIdHere' }</span></p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th>Optional parameters:</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>autoRun</td>
<td>Bool</td>
<td><p>Default <span class="title-ref">true</span></p>
<p>determines whether Invoca’s web integration runs when the page loads.</p>
<p>If you have a single page application and would like to control when Invoca’s web integration runs, set autoRun to false and call <span class="title-ref">Invoca.PNAPI.run()</span> whenever you are ready.</p>
<p>Note: autoRun does not have to be false in order to call <span class="title-ref">Inovca.PNAPI.run()</span>.</p></td>
</tr>
<tr class="even">
<td>destinationAsId</td>
<td>Bool</td>
<td><p>Default <span class="title-ref">false</span></p>
<p>Strips out any special characters and uses found destination phone number's digits as campaign ID.</p>
<p><strong>Warning! Requires Invoca campaign with explicit ID for each number.</strong></p></td>
</tr>
<tr class="odd">
<td>campaignIdOverrideParam</td>
<td>String</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>Query string name used to identify Campaign ID</p></td>
</tr>
<tr class="even">
<td>poolParams</td>
<td>Hash</td>
<td><p>Default: <span class="title-ref">{}</span></p>
<p>Set of JavaScript parameters to be captured where the key name should be RingPool parameter name. These values are updated every subsequent visit.</p></td>
</tr>
<tr class="odd">
<td>updatePoolParams</td>
<td>Bool</td>
<td><p>Default: <span class="title-ref">true</span></p>
<p>When <span class="title-ref">false</span>, the integration code will not update <span class="title-ref">poolParams</span> on subsequent page visits.</p></td>
</tr>
<tr class="even">
<td>requiredParams</td>
<td>Hash</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>A hash of key value pairs that represent query string names and values. For example: <span class="title-ref">{name: value}</span> The integration will run if any of these are met.</p>
<p>When a requiredParam's value is <span class="title-ref">*</span>, any passed value will considered true.</p></td>
</tr>
<tr class="odd">
<td>cookieNames</td>
<td>Array</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>List of cookie names to automatically capture as RingPool Parameters</p></td>
</tr>
<tr class="even">
<td>telLinkOnly</td>
<td>Bool</td>
<td><p>Default: <span class="title-ref">false</span></p>
<p>Used for a "Call Now" button. When true, will only update the tel: link on any <span class="title-ref">numberSelector</span> that is found.</p></td>
</tr>
<tr class="odd">
<td>cookieDays</td>
<td>Int</td>
<td><p>Default: <span class="title-ref">1</span></p>
<p>Number of days for cache TTL.</p></td>
</tr>
<tr class="even">
<td>onComplete</td>
<td>Function</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>Arguments: <span class="title-ref">mapping</span></p>
<p>Name of a function to call when Invoca has finished running. This is called after Invoca has run the default number replacement code and swapped out any numbers that were found.</p>
<p>For example: <span class="title-ref">functionName</span> not <span class="title-ref">functionName()</span>.</p></td>
</tr>
<tr class="odd">
<td>onCompleteOverride</td>
<td>Function</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>Arguments: <span class="title-ref">batchId</span>, <span class="title-ref">mapping</span></p>
<p>Name of a function to call when Invoca has finished running. If defined, Invoca will not replace any phone numbers. This function is responsible for updating phone numbers on the web page as the default number replacement code will not be run.</p>
<p>For example: <span class="title-ref">functionName</span> not <span class="title-ref">functionName()</span>.</p></td>
</tr>
<tr class="even">
<td>debugMode</td>
<td>Boolean</td>
<td><p>Default: <span class="title-ref">false</span></p>
<p>When true, will display debug logs in the developer console.</p></td>
</tr>
</tbody>
</table>

Examples
--------

### campaignIdOverrideParam

To use a query string parameter as the Invoca Campaign ID for all phone
numbers found on page, specify the parameter name in this option. To use
the value of <span class="title-ref">?utm\_source</span> as the Campaign
ID, follow this example:

**URL**

<http://www.example-page.com?utm_source=google>

**CODE**

    <!-- Begin Invoca Integration -->
    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
    <script type="text/javascript">
      Invoca.PNAPI.integration({
        networkId: YOUR_NETWORK_ID,
        numberSelector: ".YOUR_CLASS_SELECTOR",
        campaignIdOverrideParam: 'utm_source'
      });
    </script>
    <!-- End Invoca Integration -->

**RESULT**

The caller is assigned and delivered to the "google" campaign in Invoca
for any phone number found on the page with `data-invoca-campaign-id`'s
and the `defaultCampaignId` being overriden.

### data-invoca-campaign-id

To assign multiple numbers on a page to different Invoca Campaign IDs,
simply add this attribute to each phone number element.

**URL**

<http://www.example-page.com?utm_source=google>

**CODE**

    <div id="main">
      Call customer service at: <span class='number' data-invoca-campaign-id='customer-service'>855-555-5555</span>
      Call sales at: <span class='number' data-invoca-campaign-id='sales'>855-555-4444</span>
    </div>

    <!-- Begin Invoca Integration -->
    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
    <script type="text/javascript">
      Invoca.PNAPI.integration({
        networkId: YOUR_NETWORK_ID,
        numberSelector: ".number"
      });
    </script>
    <!-- End Invoca Integration -->

**RESULT**

When customer service is called, the call will be assigned and delivered
to the 'customer-service' campaign in Invoca. When sales is called, it
will be assigned and delivered to the 'sales' campaign in Invoca.

### defaultCampaignId

When no campaignIdOverride or data-invoca-campaign-id are found, the
default campaign ID will be assigned to the call.

**CODE**

    <div id="main">
      Call customer service at: <span class='number' data-invoca-campaign-id='customer-service'>855-555-5555</span>
      Call sales at: <span class='number'>855-555-4444</span>
      Interested in a demo? Call now! <span class='number'>855-555-4444</span>
    </div>

    <!-- Begin Invoca Integration -->
    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
    <script type="text/javascript">
      Invoca.PNAPI.integration({
        networkId: YOUR_NETWORK_ID,
        numberSelector: ".number",
        defaultCampaignId: "sales"
      });
    </script>
    <!-- End Invoca Integration -->

**RESULT**

When customer service is called, the call will be assigned and delivered
to the 'customer-service' campaign in Invoca. When sales is called, it
will be assigned to the defaultCampaignId of 'sales'. When a visitor is
interested in a demo, the call will be assigned to the defaultCampaignId
of 'sales'.

### poolParams

Allows variables from JavaScript to be associated with a call.

**CODE**

    <!-- Begin Invoca Integration -->
    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
    <script type="text/javascript">

      var invocaParams = {
        currentPage: window.location.href
      };

      Invoca.PNAPI.integration({
        networkId: YOUR_NETWORK_ID,
        numberSelector: ".YOUR_NUMBER_SELECTOR",
        poolParams: invocaParams
      });

    </script>
    <!-- End Invoca Integration -->

**RESULT**

When a call is placed, the RingPool parameter with name "currentPage"
will show the URL of the page the user called from.

For example, it may look like: <http://www.example-page.com/contact-us>

### requiredParams

Conditionally runs Invoca's web integration.

**URL \#1**

<http://www.example-page.com?gclid=1a2b3c4d5e>

**URL \#2**

<http://www.example-page.com?ref=test>

**CODE**

    <!-- Begin Invoca Integration -->
    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
    <script type="text/javascript">

      Invoca.PNAPI.integration({
        networkId: YOUR_NETWORK_ID,
        numberSelector: ".YOUR_NUMBER_SELECTOR",
        requiredParams: {gclid: "*"}
      });

    </script>
    <!-- End Invoca Integration -->

**RESULT**

When URL \#1 is visited, the Invoca web integration will run. When URL
\#2 is visited, the Invoca web integration will not run.

### Invoca.PNAPI.run()

**React**

    componentDidMount() {
      Invoca.PNAPI.run();
    }

**AngularJS**

    $scope.$on('$viewContentLoaded', Invoca.PNAPI.run);

Migrating from an older version
-------------------------------

If you are migrating from SolutionsJS 1.2 or below, please refer to the
following guide.

1. Update your namespaces - Change `Solutions.PNAPI.integration` to
`Invoca.PNAPI.integration` - Change any Toolkit functions, like
`Solutions.PNAPI.readUrl` to `Invoca.Tools.readUrl`

> [More on the Solutions Toolkit](toolkit_library.html)

2. Update your data attributes - Change `data-invoca` to
`data-invoca-campaign-id`

1.  Update your integration scripts from this:

<!-- -->

    <script type="text/javascript" src="//pnapi0.invoca.net/0/pnapi_integration.js"></script>
    <script type="text/javascript" src="//cdn.invoca.solutions/js/solutions-1.2.min.js">

to just this:

    <script type="text/javascript" src="//solutions.invocacdn.com/js/pnapi_integration-latest.min.js"></script>
