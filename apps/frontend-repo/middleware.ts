import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get('isLogin')?.value === 'true';
  const { pathname } = request.nextUrl;

  const isPublicRoute = pathname.startsWith('/auth');

  // Redirect unauthenticated users from protected routes
  if (!isLogin && !isPublicRoute) {
    console.log('Redirecting unauthenticated user to /auth');
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Redirect authenticated users away from the auth page
  if (isLogin && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth'],
};
