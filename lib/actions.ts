"use server";

import { auth } from "@/auth";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  const session = await auth();

  if (!session) {
    return JSON.parse(
      JSON.stringify({ error: "Not signed in", status: "ERROR" })
    );
  }

const {title, description, category, link} = Object.fromEntries(Array.from(form).filter(([key])=>key!== 'pitch'))

};
