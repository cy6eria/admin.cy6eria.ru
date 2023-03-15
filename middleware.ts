import { withClerkMiddleware, getAuth, clerkClient } from '@clerk/nextjs/server';
import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default authMiddleware({
    publicRoutes: ['/sign-in']
});

// Stop Middleware running on static files
export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)',};
