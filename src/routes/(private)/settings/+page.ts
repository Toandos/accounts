import { kratos } from "$lib/client/identity"

export async function load({ url }) {
    const flowId = url.searchParams.get("flow")
    const response = flowId == null
        ? await kratos.createBrowserSettingsFlow()
        : await kratos.getSettingsFlow({ id: flowId })
    return { flow: response.data }
}