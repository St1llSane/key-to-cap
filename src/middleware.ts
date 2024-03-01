import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { PrivateRoute, PublicRoute, Token } from './shared/types/enums'

export const middleware = (request: NextRequest) => {
  const { url, cookies } = request

  const refreshToken = cookies.get(Token.Refresh)?.value
  const isAuthPage =
    url.includes(PublicRoute.SignIn) || url.includes(PublicRoute.SignUp)

  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(
      new URL(PrivateRoute.Profile, request.url)
    )
  }

  if (!refreshToken && isAuthPage) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(PublicRoute.SignIn, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*', '/sign-in/:path*', '/sign-up/:path*']
}
