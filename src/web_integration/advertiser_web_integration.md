Advertiser Web Integration
==========================

**Please Note:** This documentation references invoca.net in the Web
Integration examples below. However, previous installations referencing
ringrevenue.com are still valid.

Advertiser Web Integration is a platform feature that uses JavaScript to
switch the advertiser's phone number with a campaign's tracking phone
number (promo number). When the advertiser and their marketing partners
send online traffic to the advertiser's landing page, their tracking
phone number appears on the page and attributes the marketing source for
any resulting phone calls.

Campaign promo numbers can be static or they can be dynamically
generated using the RingPool API feature.

Installation Instructions
-------------------------

1.  From the Advertiser Home Page, choose Tools gear, Web Integration.

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fawi_1_zps2c984432.png&amp;key=afea23f29e5a4f63bd166897e3dc72df" alt="">

1.  In the Web Integration, Settings tab, enter the phone number to
    replace on your website.

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2F55db321e-4b1a-402f-bebd-9f5404f08722_zpsf5d8f61e.png&amp;key=afea23f29e5a4f63bd166897e3dc72df" alt="">

1.  Click Update.
2.  Click "Get Code" tab to access your custom generated web integration
    code.
3.  Place the web integration code on your website (every page where you
    want to display the promo number) in the footer just above the
    &lt;/body&gt; tag. This step only has to be done once.

Testing the code
----------------

1.  To test web integration inside the platform, from the Web
    Integration panel, click Integration Test. Select "Open Test".

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fawic4_zps40233005.png&amp;key=afea23f29e5a4f63bd166897e3dc72df" alt="">

Click "Start Test".

If the test is successful, the results return a green checkmark.

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fawic5_zps989a68ca.png&amp;key=afea23f29e5a4f63bd166897e3dc72df" alt="">

If the test is unsuccessful, the results return with a red exclamation.
The web integration code is not installed properly or the landing page
cannot be found. See Web Integration Troubleshooting below.

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fc5ffef1c-96d3-4eda-9f2c-ca081e4bf2c9_zps09e4809b.png&amp;key=afea23f29e5a4f63bd166897e3dc72df" alt="">

1.  To test web integration outside the platform, in a browser enter the
    landing page URL, or other web integrated page's URL, and append
    PPCPN=9999999999.

    If the URL has a query string, use an "&" to append the PPCPN, for
    example:

    `http://www.invoca.com/corporate/landhere/?r=1&PPCPN=9999999999`

    If the URL does not have a query string, use a "?" to append the
    PPCPN, for example:

    `http://www.invoca.com?PPCPN=9999999999`

    If the test is successful, the number or numbers on the page change
    to 999-999-9999.

    If test is unsuccessful, the number or numbers do not change to
    999-999-9999. See Web Integration Troubleshooting below.

Web Integration Troubleshooting
-------------------------------

1.  Check that the phone number is entered in the Web Integration,
    Settings tab and matches the phone number on your website.
2.  If you display other phone numbers in addition to the number entered
    in Web Integration, Settings tab, make sure you are using additional
    client side Web Integration settings to accommodate multiple phone
    numbers. See below for examples.
3.  Check for syntax errors on the page, for example, missing commas or
    brackets.

Web Integration Settings
------------------------

Web Integration settings can be set on the server or the client side
(browser side). As an example, the NumberToReplace field can be set on
the platform(server side) and in the JavaScript function(client side). A
large majority of advertisers only need to configure the settings on the
platform or server side. Including Web Integration settings on the
client side should only be done if the Web Integration's behavior needs
to be customized. The client side settings always takes precedence over
the server side.

Server Side Integration
-----------------------

All of the server side settings are defined in the Web Integration,
Settings tab.

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fawic7_zps611d3969.png&key=afea23f29e5a4f63bd166897e3dc72df" />

Click on "Advanced Tracking Settings" to view and configure advanced
settings.

<img src="https://i.embed.ly/1/image?url=http%3A%2F%2Fi40.photobucket.com%2Falbums%2Fe238%2Fnasteele%2FInvoca%2520screenshots%2Fawic9_zps3c2de219.png&key=afea23f29e5a4f63bd166897e3dc72df" />

Advertisers can have campaign traffic and general traffic going to the
same integrated landing pages. The Web Integration code distinguishes
between the two types of traffic and behaves accordingly. Campaign
traffic arrives on the landing page by clicking on a link supplied by
the Invoca platform. The link loads the promo number dynamically with
the web integration code. General traffic arrives on the landing page
without clicking on an Invoca platform link.

To track and report on all general traffic, select "Track all calls".
Select the Campaign to track general traffic. Select or create the
RingPool to use for general traffic and click Update.

Client Side Integration & Parameters
------------------------------------

The client side settings are listed in the table below. Most
installations do not require any client side changes. To initialize the
Web Integration code, pass the integration settings in a hash to the
Invoca.advertiser\_integration function.

    Invoca.advertiser_integration = {
      id : 'YOUR_ID_HERE'
    };

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 7%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th>Required parameters:</th>
<th>&amp;nbsp;</th>
<th>&amp;nbsp;</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>id</td>
<td>String</td>
<td>Unique Advertiser ID. (Auto Populated in Tools, Web Integration, Get Code tab)</td>
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
<th><em>Optional parameters:</em></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>numberToReplace</td>
<td>String</td>
<td><p>Default: <span class="title-ref">''</span></p>
<p>Note: This field can be specified on the server side on the Web Integration, Settings tab.</p>
<p>It is recommended to use this and not add this parameter to the Javascript.</p>
<p>The phone number on the page to replace with an Invoca promo number.</p>
<p>Prefix international numbers with '+' and separate the country code with a space. Other punctuation is ignored but can be used for readability. The number is replaced in the same format as is used on the page.</p>
<p>Example values:</p>
<p>'805-555-5784', '+1 8055555784', '020 8905 1456', or '+44 020 8905 1456'</p></td>
</tr>
<tr class="even">
<td>numberSelector</td>
<td>String</td>
<td><p>Default: <span class="title-ref">''</span></p>
<p>The selector of the HTML elements where you want phone number inserted.</p>
<p>Prefix IDs with '#' and classes with '.'</p>
<p>For example, '.promoNumber' replaces the number in all HTML elements having class="promoNumber".</p></td>
</tr>
<tr class="odd">
<td>campaignId</td>
<td>String</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>Note: This option can be specified on the server side on the Web Integration, Settings tab (default campaign for general site traffic). It is recommended to use the server side settings and not add this parameter to the Javascript.</p>
<p>Unique campaign ID.</p>
<p>If you need separate settings per landing page, then this field is required.</p></td>
</tr>
<tr class="even">
<td>ringPoolId</td>
<td>String</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>Note: This can be specified on the server side on the Web Integration, Settings tab (default RingPool for general site traffic). It is recommended to use the server side settings and not add this parameter to the Javascript.</p>
<p>Unique RingPool ID.</p>
<p>If you need separate settings per landing page, then this field is required.</p>
<p>For general traffic coming to the site, the RingPool specified in Advanced Tracking Settings is used to allocate a number. If the RingPool is not specified, the campaign ID is used to find a valid RingPool.</p></td>
</tr>
<tr class="odd">
<td>numberSeparator</td>
<td>String</td>
<td><p>Default: <span class="title-ref">'-'</span></p>
<p>Character to separate phone digit groups.</p></td>
</tr>
<tr class="even">
<td>numberLeadingOne</td>
<td>Boolean</td>
<td><p>Default: <span class="title-ref">true</span>.</p>
<p>If true, inserts a leading '1' then the separator in front of the number.</p></td>
</tr>
<tr class="odd">
<td>showSelector</td>
<td>String</td>
<td><p>Default: <span class="title-ref">''</span></p>
<p>The selector of the HTML elements you want to set to visible (using jQuery.show) when a promo number is swapped out. Prefix IDs with '#' and classes with '.' .</p>
<p>This is useful for having a span that says "call now:" which should only be displayed if a valid phone number is inserted. See also hideSelector. (The elements are not shown if Click to Call is being used and ctcUseButton is set to true.)</p></td>
</tr>
<tr class="even">
<td>hideSelector</td>
<td>String</td>
<td><p>Default: <span class="title-ref">''</span></p>
<p>The selector of the HTML elements you want to have set to display:none (removed from the page visually). Prefix IDs with '#' and classes with '.'</p>
<p>This is useful for hiding the image that has the default company phone number embedded in it, when a valid promo number is found. See also showSelector and notVisibleSelector.</p></td>
</tr>
<tr class="odd">
<td>notVisibleSelector</td>
<td>String</td>
<td><p>Default: <span class="title-ref">''</span></p>
<p>The selector of the HTML elements you want to have set to visibility:hidden (hide on page in place). Prefix IDs with '#' and classes with '.'</p>
<p>This is useful for hiding an element when a valid promo number is found but keeping the page layout the same. See also hideSelector and showSelector.</p></td>
</tr>
<tr class="even">
<td>onLoadWithNumber</td>
<td>Function</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>A callback function called after web integration has run and modified the DOM using the selectors specified in the parameters.</p>
<p>Called with the following arguments:</p>
<p>is_ctc boolean - true if CTC is enabled</p>
<p>phone_number string - formatted phone number (empty if CTC is enabled and a promo number is not available).</p></td>
</tr>
<tr class="odd">
<td>onLoadNoNumber</td>
<td>Function</td>
<td><p>Default: <span class="title-ref">null</span></p>
<p>A callback function called after Web Integration runs and no modification is made.</p></td>
</tr>
<tr class="even">
<td>mobileClickToCall</td>
<td>Boolean</td>
<td><p>Default: <span class="title-ref">true</span></p>
<p>When true, automatically wraps valid promo numbers in tel links when viewed on a mobile browser, so they are clickable and launch a dialer. Non-mobile browsers will get the default behavior of just a phone number.</p>
<p>If your site already has dynamic behavior specified on the phone number DOM element, you may want to set this to false to prevent conflicts.</p></td>
</tr>
<tr class="odd">
<td>networkParamName</td>
<td>String</td>
<td><p>Default: <span class="title-ref">'sid'</span></p>
<p>The query parameter name used for passing promo numbers through click-tracking URLs. (Configured within your main network, if available)</p></td>
</tr>
<tr class="even">
<td>ctcUseButton</td>
<td>Boolean</td>
<td><p>Default: <span class="title-ref">true</span></p>
<p>Applicable when web integration is set to use the online click-to-call form. When true, modifies the elements specified by numberSelector to contain a "Call Me!" button (or ctcButtonContent if set), otherwise inserts the phone number (when available) and wires up a click handler on the element.</p>
<p>A class of click_to_call_button is added to the element specified by numberSelector. You can add CSS styling to that class to customize the look to match your website.</p></td>
</tr>
<tr class="odd">
<td>ctcButtonContent</td>
<td>String</td>
<td><p>Default: <span class="title-ref">'&lt;button type="button"&gt;Call Now!&lt;/button&gt;'</span></p>
<p>Applicable when Web Integration is using the online click-to-call form. HTML content to override the default online CTC call to action (button or hyperlink is recommended).</p></td>
</tr>
<tr class="even">
<td>debug</td>
<td>Boolean</td>
<td><p>Default: <span class="title-ref">false</span></p>
<p>When true, debug information is printed to the console in browsers that support console.log() and console.error()</p>
<p>Safari &amp; Chrome using the Developer JavaScript Console</p>
<p>Firefox with Firebug enabled</p>
<p>IE8+ with Developer Tools enabled</p></td>
</tr>
</tbody>
</table>

Client Settings (Advanced)
--------------------------

numberToReplace vs. numberSelector

There are two ways for the Web Integration code to know where to insert
a tracking phone number. Note that you should only use one or the other,
not both.

1.  The numberToReplace option, which is the easy to use option, looks
    for the advertiser's phone number on the web page and replaces it
    with the affiliate or publisher tracking phone number(promo number).
2.  The numberSelector option, which is the robust option used for
    customizing the Web Integration's behavior, looks for an HTML
    element that has the same ID or class name and replaces the entire
    element with the affiliate or publisher tracking phone number(promo
    number) or a click-to-call button. Click-to-call only works with
    this option.

Selector information
--------------------

All "selector" parameters are a comma separated list of IDs or classes,
where IDs are prefixed with a "\#" and classes are prefixed with a "."
(similar to referencing a class or ID using jQuery or prototype). Only a
single class or single ID per selector is supported, no other jQuery
selector syntax is supported.

-   Valid:

    A single class: <span class="title-ref">.promoNumber</span>

    A single ID: <span class="title-ref">\#number</span>

    A list of classes: <span class="title-ref">.promoNumber,
    .mainNumber</span>

-   Not valid:

    <span class="title-ref">table &gt; .promoNumber</span>

    <span class="title-ref">.promoNumber:first</span>

    <span class="title-ref">span\#number</span>

Simple Examples
---------------

Default example of replacing multiple phone numbers on a page, with no
additional options specified: ( 'YOUR\_ID\_HERE' represents where the
unique advertiser ID is inserted.)

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page</title>
      </head>

      <body>
        Call Now! 1-800-555-1234

        <div class="content">
          Here is the content of your website.
        </div>

        <div class="footer">
          Contact us: 1-800-555-1234
        </div>
        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id : 'YOUR_ID_HERE'
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

Example with NumberToReplace options specified on the client side,
replacing multiple phone numbers on a page:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page</title>
      </head>

      <body>
        Call Now! 1-800-555-1234

        <div class="content">
          Here is the content of your website.
        </div>

        <div class="footer">
          Contact us: 1-800-555-1234
        </div>
        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id : 'YOUR_ID_HERE',
              numberToReplace : '1-800-555-1234'
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

Advanced Examples
-----------------

Example changing the phone number presentation using the NumberSelector
option on the client side:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page</title>
      </head>

      <body>
        Sales:<br />
        <strong><span id="site_phone_number">800.555.1234</span></strong>

        <div class="content">
          Here is the content of your website.
        </div>
        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
              Invoca.advertiser_integration = {
                id : 'YOUR_ID_HERE',
                numberSelector : '#site_phone_number',
                numberLeadingOne : false,
                numberSeparator : '.'
              };
          } catch( e ){ }
        </script>
      </body>
    </html>

Example website that has the default phone number embedded in an image:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page with Phone Number in Image</title>
      </head>

      <body>
        <div class="header">
          <img src="http://support.invoca.net/sites/default/files/admin/company_logo.gif" />
          <img src="http://support.invoca.net/sites/default/files/admin/header_phone_number.gif" id="header_phone" />
          <span class="promoNumber"></span>
        </div>

        <div class="content">
          Here is the content of your website.
        </div>
        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id             : 'YOUR_ID_HERE',
              numberSelector : '.promoNumber',
              hideSelector   : '#header_phone'
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

Example website that has no default phone number, and wants to show a
call to action when a promo number is used:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page with No Default Phone Number</title>
      </head>

      <body>
        <div class="header">
          <img src="http://support.invoca.net/sites/default/files/admin/company_logo.gif" />
          <span class="promoCallNow" style="display: none">Call now: </span>
          <span class="promoNumber"></span>
        </div>

        <div class="content">
          Here is the content of your website.
        </div>
    <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id : 'YOUR_ID_HERE',
              numberSelector : '.promoNumber',
              showSelector   : '.promoCallNow'
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

\* For sites with dynamic numbers through a third party, the Invoca code
can still swap promo numbers over the third party numbers by placing the
span tags around the code: <span class="title-ref">&lt;span
class="promoNumber"&gt;INSERT THIRD PARTY CODE HERE&lt;/span&gt;</span>

Example using callbacks for custom behavior. (Note that adding tel links
to numbers now happens automatically, so using a callback is no longer
necessary!)

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page with Callback Functions</title>
        <script type="text/javascript">
          function showNumber( is_ctc, phoneNumber )
          {
            alert( 'The following number was returned and displayed: ' + phoneNumber + '. CTC enabled: ' + is_ctc );
          }

          function hideNumber( )
          {
            alert( 'No number was returned' );
          }
        </script>
      </head>

      <body>
        <div class="header">
          Call <span id="number" class="promoNumber">1-800-555-1234</span>
        </div>

        <div class="content">
          Here is the content of your website.
        </div>

        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id               : 'YOUR_ID_HERE',
              numberSelector   : '.promoNumber',
              onLoadWithNumber : showNumber,
              onLoadNoNumber   : hideNumber
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

Capturing Additional Parameters with JavaScript
-----------------------------------------------

You can capture additional RingPool parameters through client-side
JavaScript using the poolParams option. In the following example, the
visitor???s landing page timestamp is set to the poolParam ???landingTime???.

    <script src="//js14.invoca.net/14/integration.js"></script>
    <script type="text/javascript">
      var d = new Date();
      var timeStamp = d.toUTCString();

      Invoca.advertiser_integration = {
        id : 'YOUR_ID_HERE',
            campaignId : YOUR_CAMPAIGN_ID,
            ringPoolId : YOUR_RINGPOOL_ID,
            poolParams : { landingTime : timeStamp }
        };
    </script>

Displaying Different Numbers on Other Pages
-------------------------------------------

Typically a visitor is ???cookied??? at a domain level and therefore is
served the same number as they visit various web-integrated pages on the
same domain. Use the ???cookieId??? option to set a unique cookie on
different pages of a website. This allows different numbers to be served
to the same visitor, depending on the page they visit. This example
demonstrates how to allocate a unique number for the same user on two
different pages. Any page that uses cookieId: "A" displays one number,
and any page that uses cookieId: "B" displays another. Note: The cookie
names (e.g. A, B) can be a custom name of your choosing.

    <!-- Page 1: Cookie "A" -->
    <script src="//js14.invoca.net/14/integration.js"></script>
    <script type="text/javascript">
      Invoca.advertiser_integration = {
         id : 'YOUR_ID_HERE',
            campaignId : YOUR_CAMPAIGN_ID,
            ringPoolId : YOUR_RINGPOOL_ID,
            cookieId: 'A'
        };
    </script>

    <!-- Page 1: Cookie "B" -->
    <script src="//js14.invoca.net/14/integration.js"></script>
    <script type="text/javascript">
      Invoca.advertiser_integration = {
        id : 'YOUR_ID_HERE',
        campaignId : YOUR_CAMPAIGN_ID,
        ringPoolId : YOUR_RINGPOOL_ID,
        cookieId: 'B'
      };
    </script>

Online Click-To-Call (CTC) Form Settings
----------------------------------------

When online CTC is enabled, the default behavior is for the phone number
on the page to be replaced by a "Call now" button. When clicked, a
lightbox window pops up over the page prompting the user to enter their
phone number. The logo shown in the lightbox can be customized in the
platform on the Customize Online Click-to-Call Form page accessed from
Tools, Web Integration, Settings tab, Advanced Tracking Settings link.

Example of customizing the "Call now" button when using online CTC.

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page with Customized CTC Button</title>
      </head>

      <body>
        <div class="header">
          <span class="promoNumber">1-800-555-1234</span>
        </div>

        <div class="content">
          Here is the content of your website.
        </div>
        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id               : 'YOUR_ID_HERE',
              numberSelector   : '.promoNumber',
              ctcUseButton     : true,
              ctcButtonContent : '<a href="#">Click Here to Call</a>'
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

That example results in a "Click Here to Call" link in the header, and
when clicked would show the online CTC form.

Example of Multiple RingPools??? on a Single Landing Page

It is possible to have a single landing page with one installation of
the web integration code that chooses different RingPools based on the
criteria of your choosing (a query param or referring site, etc.).

1.  On the server, you can have a list of RingPool / Campaign ID pairs,
    and associate each pair with a key. In the example below, the key is
    the referring page's domain.
2.  Find the correct ID pairs for a given request, and make them
    available for the view template.
3.  Insert the ID pair into the web integration code using the template.

The following is an example using Ruby on Rails as the web technology.
Regardless of how you are generating the landing pages, the concepts are
the same.

Server code (controller/action):

    class LandingPageController < ApplicationController
      RING_POOL_BY_REFERRER = { "google"   : [ 7, 8  ],
                                "facebook" : [ 7, 10 ],
                                "bing"     : [ 8, 31 ] }
      def show
        @page = LandingPage.find( params[:id] )
        ids = RING_POOL_BY_REFERRER[ domain_name_from_referrer( request.env["HTTP_REFERER"] ) ]
        @campaign_id  = ids[0]
        @ring_pool_id = ids[1]
      end

      private

      \# parses string and returns "google", "facebook", etc
      def domain_name_from_referrer( referrer )
        ...
      end
    end

HTML page (template):

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Landing Page with Multiple RingPools</title>
      </head>

      <body>
        <div class="header">
          <span class="promoNumber"></span>
        </div>

        <div class="content">
          <%= @page.body %>
        </div>
        <!-- Omit http from path to ensure protocol is same as current request -->
        <script src="//js14.invoca.net/14/integration.js"></script>
        <script type="text/javascript">
          try {
            Invoca.advertiser_integration = {
              id               : 'YOUR_ID_HERE',
              numberSelector   : '.promoNumber',
              campaignId       : '<%= @campaign_id %>',
              ringPoolId       : '<%= @ring_pool_id %>'
            };
          } catch( e ){ }
        </script>
      </body>
    </html>

Notice that there is only ever one installation of the Web Integration
code, and the only thing that needs to be set up on the server side are
the IDs of the RingPool and Campaign.

Elegantly Swap Phone Number with jQuery
---------------------------------------

By default, the Advertiser Web Integration code swaps a static phone
number with a campaign number when a landing page loads. Occasionally,
visitors may notice that the number changes.

The following example shows how to hide the static number on a landing
page, and only show the Promo Number after the code runs. Additionally,
in the event that no promo number is available, the code displays the
original static number.

**Directions:**

Update <span class="title-ref">var PHONE\_SELECTOR</span> to be the
selector wrapping the phone number to be replaced.

Update <span class="title-ref">var FADE\_SPEED</span> to be the length
of the fade in milliseconds.

In the HTML, wrap your phone numbers in a span tag with the class
???phone-number???. <span class="title-ref">&lt;span
class=???phone-number???&gt;STATIC NUMBER HERE&lt;/span&gt;</span>.

    <!-- Omit http from path to ensure protocol is same as current request -->
    <script src="//js11.invoca.net/11/integration.js"></script>
    <script type="text/javascript">

    /* -- Invoca Custom Code -- */

      // Fade in tracking number on success, or original number on fail
      function showNumber()
      {
        jQuery(PHONE_SELECTOR).fadeIn(FADE_SPEED);
      }

      // Settings
      var PHONE_SELECTOR = '.example';
      var FADE_SPEED     = 250; // Miliseconds

      // Hide default number
      jQuery(PHONE_SELECTOR).css({'display':'none'});

      // Our number swapping code
      Invoca.advertiser_integration = {
        id               : 'YOUR_ID_HERE',
        numberSelector   : PHONE_SELECTOR,
        onLoadWithNumber : showNumber,
        onLoadNoNumber   : showNumber
      };

    /* -- End of Invoca Custom Code -- */

    </script>
    <!-- End Call Tracking Code -->

Developers Note
---------------

While testing the Web Integration code, especially advanced cases
including RingPool or Campaign IDs, it is recommended that you set
"debug: true". If a RingPool ID is specified but is invalid, an error
message is logged to the browser's JavaScript console stating that the
RingPool ID is invalid (note that a working phone number may still be
returned, it just will not be for the correct RingPool). If both
RingPool and Campaign ID are invalid, an error message is logged stating
the Campaign ID is invalid.
