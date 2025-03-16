"use server";

export async function login(formData: FormData) {
  const username = formData.get("username");
  console.log(`username: ${username}`);
}
