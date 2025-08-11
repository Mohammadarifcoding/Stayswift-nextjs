"use server";

import { signIn } from "@/auth";

const handleAuth = async (event) => {
  "use server";
  await signIn("google", { redirectTo: "/bookings" });
};

export { handleAuth };
