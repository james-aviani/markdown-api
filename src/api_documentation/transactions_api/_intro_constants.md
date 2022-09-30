We provide three helpful constants that can be used in the
<code>include_columns</code> and <code>exclude_columns</code> options:

> <span class="title-ref"><code>$invoca_custom_columns</code></span> a dynamic
> constant that represents the current list of your Marketing Data
> Fields. 
>
>><b> Note: </b> If the list of custom columns changes, those changes
> will be included in future API calls that use
> <code>include_columns=$invoca_custom_columns</code>, independent of the API
> version. See Marketing Data Parameters section for more details.
>
> <span class="title-ref"><code>$invoca_custom_source_columns</code></span> a
> dynamic constant that represents the sources for the current list of
> your Marketing Data Fields. 
>
>><b> Note: </b> If the list of custom columns
> changes, those changes will be included in future API calls that use
> <code>include_columns=$invoca_custom_source_columns</code>, independent of
> the API version. See Marketing Data Parameters section for more
> details.
>
>
> <span class="title-ref"><code>$invoca_default_columns</code></span> represents
> the default set of columns provided by the Transactions API for your
> requested version
