"use server";

export type LoginResponse = {
  type: "error" | "success";
  message: string;
};

export async function login({
  username,
}: {
  username: string;
}): Promise<LoginResponse> {
  if (!username) {
    return {
      type: "error",
      message: "Error: username cannot be empty",
    };
  }
  return {
    type: "success",
    message: `Success: Logged in as "${username}"`,
  };
}
