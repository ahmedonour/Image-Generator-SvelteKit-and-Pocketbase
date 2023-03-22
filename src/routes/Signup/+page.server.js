export const actions={
    Signup: async ({ locals, request })=>{
        const formData = await request.formData( )
        const data = Object.fromEntries([...formData])
        console.log(data)
    }
}