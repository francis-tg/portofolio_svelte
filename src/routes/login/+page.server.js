export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        console.log(data)
    }
}