<script lang="ts">
    import OryUI from '$lib/client/OryUI.svelte';

    const { data } = $props();
    const flow = $derived(data.flow)
</script>

<main class="w-full h-full grid place-content-center">
    <div class="card bg-base-200">
        <div class="card-body">
            <h2 class="card-title">Login</h2>
            <OryUI ui={flow.ui} />
        </div>
    </div>
</main>