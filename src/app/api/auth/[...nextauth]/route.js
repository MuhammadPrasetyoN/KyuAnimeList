import nextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async redirect({ url, baseUrl }) {
          // Redirect user to root (localhost:3000) after login
          return baseUrl;
        },
      },
}

const handler = nextAuth(authOption)

export {handler as GET, handler as POST}