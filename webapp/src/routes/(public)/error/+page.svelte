<script lang="ts">
    const { data } = $props();
    const error = $derived(data.error);
</script>

{JSON.stringify(error, null, 4)}