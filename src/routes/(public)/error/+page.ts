import { kratos } from "$lib/client/identity";

export async function load({ url }) {
    const id = url.searchParams.get("id")
    if(id == null) throw new Error("Missing query param")
    const response = await kratos.getFlowError({ id })
    return { error: response.data }
}