import { kratos } from '$lib/client/identity'
import { redirect } from '@sveltejs/kit'

export async function load() {
    try {
        const { data: session } = await kratos.toSession()
        return { session }
    } catch {
        throw redirect(303, "/login")
    }
}