Transactions API
================

The Transactions API returns call attributes, marketing data, and signal conversions. Additionally, correction transactions are returned that serve as corrections to previous call transactions. The API follows REST conventions. Perform an HTTPS GET to the URL with the format in which you’d like to receive data. The following response formats are supported.
 - CSV
 - XML
 - JSON

The API is accessible using the API credentials generated
on the platform. 


[View the support documentation for this API.](https://community.invoca.com/t5/developer-features/how-to-access-invoca-call-data-programmatically-via-api/ta-p/602)


The data returned depends on your account type. To see which fields you
will see, select an account type below.

`network_user` [Network / Brand](./transactions_api/network_user.md)

`advertiser_user` [Advertiser / Merchant](./transactions_api/advertiser_user.md)

`affiliate_user` [Publisher / Affiliate](./transactions_api/affiliate_user.md)

Please note, the documentation shows a superset of fields available.
Your response may differ depending on the features enabled on the
platform being accessed. Make a sample request to the API to identify
the fields returned.