"use server";

export type LoginResponse =
  | {
      success: string;
    }
  | {
      error: string;
    };

export async function login({
  username,
}: {
  username: string;
}): Promise<LoginResponse> {
  if (!username) {
    return {
      error: "Error: username cannot be empty",
    };
  }
  return {
    success: `Logged in as "${username}"`,
  };
}
