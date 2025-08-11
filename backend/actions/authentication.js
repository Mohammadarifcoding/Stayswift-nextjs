"use server";

import { signIn, signOut } from "@/auth";

const handleGoogleAuth = async (event) => {
  "use server";
  await signIn("google", { redirectTo: "/bookings" });
};

const handleGithubAuth = async (event) => {
  "use server";
  await signIn("github", { redirectTo: "/bookings" });
};
const handleLogOut = async (event) => {
  "use server";
  await signOut();
};

const signInBycredential = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export { handleGoogleAuth, handleGithubAuth, handleLogOut, signInBycredential };
