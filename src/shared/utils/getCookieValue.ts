export const getCookieValue = (valuetoFind: string) => {
  const cookies = document.cookie.split('; ')

  for (const cookie of cookies) {
    const [key, value] = cookie.split('=')

    if (key === valuetoFind) return encodeURIComponent(value)
  }

  return null
}
