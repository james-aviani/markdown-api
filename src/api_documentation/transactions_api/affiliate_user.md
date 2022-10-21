{{#include _intro.md}}

<style>.hide{ display: none;}</style>
<label>
  Format:
  <select class="scheme" name="scheme">
    <option value="json">JSON</option>
    <option value="xml">XML</option>
    <option value="csv">CSV</option>
    <option value="curl">cURL</option>
  </select>
</label>

<div class="result-json">

    {{#include affiliate_json.md}}

</div>

<div class="result-xml hide">

    {{#include affiliate_xml.md}}

</div>

<div class="result-csv hide">

    {{#include affiliate_csv.md}}

</div>

<div class="result-curl hide">

    {{#include affiliate_curl.md}}

</div>
<script src="schemesRender.js"></script>

<div style="{display: none;}">

</div>

## General Parameters

{{#include _network_param_table.md}}

{{#include _dnpr_param_table.md}}
