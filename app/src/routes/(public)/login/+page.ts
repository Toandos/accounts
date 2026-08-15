import { kratos } from "$lib/client/identity";
import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
    const flowId = url.searchParams.get("flow")
    const response = flowId == null
        ? await (async() =>{
            const loginChallenge = url.searchParams.get("login_challenge") ?? undefined;
            return await kratos.createBrowserLoginFlow({ loginChallenge })
        })()
        : await kratos.getLoginFlow({ id: flowId })
    return { flow: response.data }
}