import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Configure NextAuth
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
};

// Export the handler functions as expected by Next.js
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
