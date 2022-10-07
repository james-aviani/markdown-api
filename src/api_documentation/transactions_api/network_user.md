Network / Brand
===============
{{#include _intro.md}}

<style>.hide{ display: none;}</style>
<label>
  Scheme:
  <select class="scheme" name="scheme">
    <option value="">Select One …</option>
    <option value="json">JSON</option>
    <option value="xml">XML</option>
    <option value="csv">CSV</option>
    <option value="curl">cURL</option>
  </select>
</label>

<div class="result-json hide">

    {{#include json.md}}

</div>

<div class="result-xml hide">

    {{#include xml.md}}

</div>

<div class="result-csv hide">

{{#include csv.md}}

</div>

<div class="result-curl hide">

    {{#include curl.md}}

</div>
<script src="schemesRender.js"></script>

<div style="{display: none;}">

</div>

## General Parameters

{{#include _network_param_table.md}}

{{#include _dnpr_param_table.md}}
