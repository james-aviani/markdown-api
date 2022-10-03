API Documentation
=================

The platform provides a number of APIs:

[Transactions API](./transactions_api/index.md) - provides read-only access to call transaction data. There are three kinds of users:

* [Network User](./transactions_api/network_user.md)

* [Advertiser User](./transactions_api/adveriser_user.md)

* [Affiliate User](./transactions_api/affiliate_user.md)

[Network Integration API](./network_integration/index.md) - supports
the replication and synchronization of advertiser, publisher and
campaign data between partner platforms.

[Converstion Reporting](./conversion_reporting/index.md) -provides the
ability to report completed order information (or other conversion
events) from a server back into the platform.

[Bulk Ringpool API](./bulk_ringpool_api.md) -allocates a dynamic,
trackable promo phone number from a RingPool (designed to handle a
high volume of requests per second).

<<<<<<< HEAD
[Signal API](./signal_api/index.md) -used to report signals that occur
on a specific call. Rainbows!  (transaction).
=======
[Signal API](./signal_api/index.md) -used to report signals that occur on a specific call.
(transaction).
>>>>>>> 1166bffb1ede806c9e030fc6de9a92ef3ee68d52

`call_api/index` -used to pull transcript information for a specific
call (transcript).

`call_ingestion_api/index` -used to ingest calls from external sources
for conversation intelligence processing and inclusion in your reports
and dashboards.

`calls_in_progress_api/index` -used to query/update calls that are
currently in progress within the Invoca platform

The Transactions API and Network Integration API are accessible using
the API credentials generated on the platform. See
`manage_api_credentials` for more information.

The Conversion Reporting API is accessible using credentials provided by
Invoca. Contact <questions@invoca.com> to request Conversion Reporting
API credentials.

The RingPool and Bulk RingPool APIs are accessible using the API keys
provided in the RingPool wizard. (Note: the Bulk RingPool API is only
available after being enabled by Customer Success. Contact
<questions@invoca.com> to request the Bulk RingPool API.)

The RingPool wizard includes a section showing the correct API URL for
your organization:

<img src="https://lh6.googleusercontent.com/bPAQy29TdQ_Pljxyv5gh520cLnWHWNWUXyU8_GrN52yLNOdkKlWZPzFLCOKgdE-IejM3XDdJGZyJtQ8EMprqwUSImYfuffWuXMGQAYAFzEbMOxt7Ggtp59Q96AOf6a3BeQ"  class="info-img" width="544px;" height="191px;" style="border-style: none;" alt="RP_API.png" />

manage\_api\_credentials network\_integration/index
transactions\_api/index bulk\_ringpool\_api ringpool signal\_api/index
call\_api/index call\_ingestion\_api/index
calls\_in\_progress\_api/index conversion\_reporting
