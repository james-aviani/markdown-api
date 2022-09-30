Advertiser Users
================

For convenience, the API provides an interface for performing operations
on specific advertiser users. This is useful for situations where it is
inconvenient to send an array of all existing advertiser users. Actions
for this endpoint can only be taken on users with value of false for
<span class="title-ref">&lt;can\_login\_via\_platform&gt;</span> field,
indicating that the user's authentication is managed by the network (and
has access to the Invoca platform using SSO).

Endpoint:

`https://invoca.net/api/@@NETWORK_API_VERSION/<network_id>/advertisers/<advertiser_id_from_network>/users/<user_id_from_network>.json`
