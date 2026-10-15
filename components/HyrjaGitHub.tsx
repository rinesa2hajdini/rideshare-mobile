
"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function HyrjaGitHub() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Po kontrollohet sesioni...</p>;
  }

  if (session?.user) {
    return (
      <div>
        <p>Je kyçur si {session.user.name ?? session.user.email}.</p>
        <button type="button" onClick={() => signOut()}>
          Dil nga llogaria
        </button>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => signIn("github")}>
      Hyr me GitHub
    </button>
  );
}
