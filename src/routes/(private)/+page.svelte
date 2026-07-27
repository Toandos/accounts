<script lang="ts">
    const { data } = $props()
    const session = $derived(data.session);
</script>

<p>Successfully logged in (Id: ${session.identity?.id})</p>
<a href="/settings" class="btn btn-info">Settings</a>