import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { Session } from "next-auth";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session: Session | null }) {},
  async signIn({ profile: NextAuthSignIn }) {},
});

export { handler as GET, handler as POST };
