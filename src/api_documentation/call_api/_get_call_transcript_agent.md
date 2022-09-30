**Examples**

Get transcript for the given call record <span
class="title-ref">CUID-33</span> with just the agent included

Endpoint:

`https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=agent`

Format: application/json

Response Code: 200

Response Body:

    [
      {
        agent: "Which Color?, Okay I will look into that, Goodbye!"
      }
    ]
