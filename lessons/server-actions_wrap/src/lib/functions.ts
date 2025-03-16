"use server";

export async function login({ username }: { username: string }) {
  if (!username) {
    return {
      error: "username cannot be empty",
    };
  }
  return {
    success: "login successful",
  };
}
