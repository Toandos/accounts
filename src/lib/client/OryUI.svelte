<script lang="ts">
    import { type UiContainer, type UiNodeInputAttributes } from "@ory/client";

    const { ui } : { ui: UiContainer } = $props()

    const convertInputAttributes = (oryAttributes: UiNodeInputAttributes) => {
        return {
            "autocomplete": oryAttributes.autocomplete as any,
            "disabled": oryAttributes.disabled,
            "aria-label": oryAttributes.label?.text,
            "maxlength": oryAttributes.maxlength,
            "name": oryAttributes.name,
            "onclick": oryAttributes.onclick ? () => eval(oryAttributes.onclick!) : undefined,
            "onload": oryAttributes.onload ? () => eval(oryAttributes.onload!) : undefined,
            "pattern": oryAttributes.pattern,
            "required": oryAttributes.required,
            "type": oryAttributes.type,
            "value": oryAttributes.value
        }
    }
</script>

<form action={ui.action} method={ui.method as any}>
    {#each ui.messages as message}
        <div role="alert" class="alert">
            <span>{message.text}</span>
        </div>
    {/each}
    {#each ui.nodes as node}
        {#if node.attributes.node_type == "input"}
            {@const { type, ...attributes } = convertInputAttributes(node.attributes)}
            {#if type == "hidden"}
                <input {type} {...attributes}>
            {:else if type == "button" || type == "submit"}
                <button
                    {type}
                    class="btn btn-info"
                    {...attributes}
                >
                    {node.meta.label?.text}
                </button>
            {:else}
                <label class="input">
                    {#if node.meta.label}
                        <span class="label">{node.meta.label.text}</span>
                    {/if}
                    <input {type} {...attributes}>
                </label>
            {/if}
        {:else if node.attributes.node_type == "script"}
            {@const { node_type, ...attributes } = node.attributes}
            <script {...attributes as any}></script>
        {/if}
    {/each}
</form>