**Examples**

Get transcript for the given call record <span
class="title-ref">CUID-33</span> with just the caller included

Endpoint:

`https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=caller`

Format: application/json

Response Code: 200

Response Body:

    [
      {
        caller: "Orange, Awesome thank you, Have a good one"
      }
    ]
