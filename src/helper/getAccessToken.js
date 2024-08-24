
export const getAccessToken = () => {
    const blogToken = localStorage.getItem('blog-token')
    return blogToken
}