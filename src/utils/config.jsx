export const config = (token) => {
    return {
        headers: {
            Accept: 'Application/json',
            Authorization: `Bearer ${token}`
        }
    }
}