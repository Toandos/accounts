import { kratos } from "$lib/client/identity";

export async function load({ url }) {
    const flowId = url.searchParams.get("flow")
    const response = flowId == null
        ? await kratos.createBrowserRegistrationFlow()
        : await kratos.getRegistrationFlow({ id: flowId })
    return { flow: response.data }
}