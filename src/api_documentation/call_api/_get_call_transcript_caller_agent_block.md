**Examples**

Get transcript for the given call record <span
class="title-ref">CUID-33</span> with both agent and caller included in
a single block for each.

Endpoint:

`https://mynetwork.invoca.net/call/transcript/CUID-33?transcript_format=caller_agent_block`

Format: application/json

Response Code: 200

Response Body:

    [
      { agent: "Which Color?, Okay I will look into that, Goodbye!" },
      { caller: "Orange, Awesome thank you, Have a good one" }
    ]
