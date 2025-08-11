import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credential from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoDbClient from "./backend/mongo/mongoClient";
import { userModel } from "./backend/models/user-model";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoDbClient, {
    databaseName: process.env.DATABASE_NAME,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      client: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Github({
      client: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credential({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(params) {
        if (params.email && params.password) {
          const user = await userModel.findOne({ email: params.email });
          if (user) {
            const ismatch = await bcrypt.compare(
              params.password,
              user.password
            );
            if (ismatch) {
              return user;
            } else {
              throw new Error("Password not match");
            }
          } else {
            throw new Error("User not found");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
