import NextAuth from 'next-auth'

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
  try {
    const url =
      'https://applications.frame.io/oauth2/token?' +
      new URLSearchParams({
        client_id: process.env.FRAMEIO_OAUTH_CLIENT_ID,
        client_secret: process.env.FRAMEIO_OAUTH_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken
      })

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
};

const FrameioOAuthProvider = {
  id: 'frameio',
  name: 'Frameio',
  type: 'oauth',
  authorization: {
    url: "https://applications.frame.io/oauth2/auth",
    params: { scope: 'team.read account.read project.read reviewlink.read asset.read', }
  },
  token: "https://applications.frame.io/oauth2/token",
  userinfo: "https://api.frame.io/v2/me",
  clientId: process.env.FRAMEIO_OAUTH_CLIENT_ID,
  clientSecret: process.env.FRAMEIO_OAUTH_CLIENT_SECRET,
  profile(profile) {
    return {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      image: profile.image_64,
      // How we could get the Frame.io roles to use in next-auth
      // frameEmployee: profile.roles.admin ||
      //   profile.roles.sales ||
      //   profile.roles.service_desk ||
      //   profile.roles.support
    }
  },
};

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    FrameioOAuthProvider
  ],
  debug: true,
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    // async jwt({ token, account }) {
    //   if (account) {
    //     token = Object.assign({}, token, { access_token: account.access_token });
    //   }
    //   return token
    // },
    // async session({ session, token }) {
    //   if (session) {
    //     session = Object.assign({}, session, { access_token: token.access_token })
    //     console.log(session);
    //   }
    //   return session
    // }
    // async jwt(token, user, account, profile, isNewUser) {
    //   console.log({ profile, account, user, token });
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken;
    //   }
    //   return token;
    // },
    async jwt({ token, account }) {
      // Initial sign in
      console.log('token', token);
      console.log('account', account);
      return {...token, ...account}
    },
    async session({ session, token, user }) {
      session.accessToken = token.access_token
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
