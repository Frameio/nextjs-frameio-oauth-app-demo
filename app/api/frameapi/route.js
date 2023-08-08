import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt';
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

let accessToken;


// https://blog.srij.dev/nextauth-google-access-token

export async function GET() {
    // const session = await getServerSession(authOptions)
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!session) {
        return NextResponse.json({ message: 'You are not logged in.' })
    }

    const token = await getToken({ req, secret, encryption: true });
    console.log(token);
    console.log(session);
    accessToken = session.accessToken;

    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }

    const reviewLinkInfoRequest = await fetch('https://api.frame.io/v2/review_links/e0114ea8-f283-43ad-91c6-011fa7cfdcbf', { headers })
    const reviewLinkInfo = await reviewLinkInfoRequest.json()
    const reviewLinkAssetsRequest = await fetch('https://api.frame.io/v2/review_links/e0114ea8-f283-43ad-91c6-011fa7cfdcbf/items/shared?page=1&page_size=50', { headers })
    const reviewLinkAssets = await reviewLinkAssetsRequest.json();

    console.log(reviewLinkInfo);
    console.log(reviewLinkAssets);

    return NextResponse.json({ reviewLinkInfo: reviewLinkInfo, reviewLinkAssets: reviewLinkAssets })
}
