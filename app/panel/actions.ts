"use server";

import { redirect } from "next/navigation";
import { ndryshoOren } from "@/lib/lejet";

export async function ruajOren(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const ora = String(formData.get("ora") ?? "");

  let rezultati: string;

  try {
    rezultati = await ndryshoOren(id, ora);
  } catch {
    redirect("/panel?m=databaza");
  }

  redirect(`/panel?m=${rezultati}`);
}