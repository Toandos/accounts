<script lang="ts">
    const { data } = $props();
    const consentRequest = $derived(data.consentRequest);
</script>

<main class="w-full h-full grid place-content-center">
    <div class="card bg-base-200">
        <form method="POST" class="card-body">
            <h2 class="card-title">Authorize {consentRequest.client?.client_name}</h2>
            Grants access to the requested scopes ({consentRequest.requested_scope || 'None'})
    
            <input
                type="hidden"
                name="challenge"
                value={consentRequest.challenge}
            />

            <div class="card-actions">
                <button type="submit" name="decision" value="reject" class="btn btn-error">
                    Reject
                </button>
                <button type="submit" name="decision" value="accept" class="btn btn-success">
                    Accept
                </button>
            </div>
        </form>
    </div>
</main>