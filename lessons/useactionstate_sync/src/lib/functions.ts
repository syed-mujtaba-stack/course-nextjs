"use server";

export type ServerState = {
  likes: number;
};

export async function initial(): Promise<ServerState> {
  return { likes: 0 };
}

export async function update(prevState: ServerState): Promise<ServerState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { likes: prevState.likes + 1 };
}
