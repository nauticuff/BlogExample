import NextAuth from 'next-auth';
import { GitHubProvider } from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Add other providers if needed
  ],
});
