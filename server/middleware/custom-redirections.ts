export default defineEventHandler(async (event) => {
    const urlObj = getRequestURL(event)

    if (urlObj.pathname === '/__nuxt_error') return 
    
    if (urlObj.pathname.match(/[A-Z]/)) {
        urlObj.pathname = urlObj.pathname.toLowerCase()
        await sendRedirect(event, urlObj.href)
    }

})