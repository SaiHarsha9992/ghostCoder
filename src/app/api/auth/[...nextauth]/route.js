import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"; // For manual login
import User from "../../../models/User";
import connectToDatabase from "../../../utils/mongodb";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Credentials provider for manual sign-in
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "UserName", type: "username" },
      },
      async authorize(credentials) {
        try {
          await connectToDatabase();

          // Find user by email
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("No user found with this email");
          }

          // Check if the username matches
          if (credentials.username === user.username) {
            return { email: user.email, name: user.username };
          }

          throw new Error("Invalid username");
        } catch (error) {
          console.error("Error in manual login:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectToDatabase();

        // Use findOne to get a single user, not an array
        const existingUser = await User.findOne({ email: user.email });

        if (existingUser) {
          existingUser.lastLogin = Date.now();
          existingUser.provider = account.provider;
          await existingUser.save(); // Save the updated user
        } else {
          const newUser = new User({
            username: user.name,
            email: user.email,
            provider: account.provider,
          });
          await newUser.save();
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },

  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
