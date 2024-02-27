import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { PrivateRoutes, PublicRoutes, Tokens } from './shared/types/enums'

export const middleware = (request: NextRequest) => {
  const { url, cookies } = request

  const refreshToken = cookies.get(Tokens.Refresh)?.value
  const isAuthPage =
    url.includes(PublicRoutes.SignIn) || url.includes(PublicRoutes.SignUp)

  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(
      new URL(PrivateRoutes.Profile, request.url)
    )
  }

  if (!refreshToken && isAuthPage) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(PublicRoutes.SignIn, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*', '/sign-in/:path*', '/sign-up/:path*']
}
