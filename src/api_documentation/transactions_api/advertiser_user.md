{{#include _intro.md}}

{{#include _rollup_message.md}}

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

    {{#include advertiser_json.md}}

</div>

<div class="result-xml hide">

    {{#include advertiser_xml.md}}

</div>

<div class="result-csv hide">

    {{#include advertiser_csv.md}}

</div>

<div class="result-curl hide">

    {{#include advertiser_curl.md}}

</div>
<script src="schemesRender.js"></script>

<div style="{display: none;}">

</div>

## General Parameters

{{#include _advertiser_param_table.md}}

{{#include _conversion_reporting_param_table.md}}

{{#include _demographics_param_table.md}}

{{#incldue _adwords_param_table.md}}

{{#include _dnpr_param_table.md}}
