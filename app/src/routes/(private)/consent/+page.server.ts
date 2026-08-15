import { hydraAdmin } from '$lib/server/oauth.js';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
    const consentChallenge = url.searchParams.get("consent_challenge");
    if (!consentChallenge) redirect(302, "/")
    const { data: consentRequest } = await hydraAdmin.getOAuth2ConsentRequest({ consentChallenge });
    if(consentRequest.skip == true) {
        const { data: { redirect_to }} = await hydraAdmin.acceptOAuth2ConsentRequest({ consentChallenge })
        throw redirect(303, redirect_to);
    }
    return { consentRequest }
}

export const actions = {
    default: async(event) => {
        const data = await event.request.formData();
        const consentChallenge = data.get("challenge") as string;
        const decision = data.get("decision") as "reject" | "accept"
        if(decision == "accept") {
            const { data: { redirect_to }} = await hydraAdmin.acceptOAuth2ConsentRequest({ consentChallenge })
            throw redirect(303, redirect_to);
        }
        const { data: { redirect_to } } = await hydraAdmin.rejectOAuth2ConsentRequest({ consentChallenge });
        throw redirect(303, redirect_to);
    }
}