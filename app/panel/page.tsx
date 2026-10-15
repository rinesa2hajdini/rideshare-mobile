import Link from "next/link";
import Hyrja from "@/components/Hyrja";
import { profiliIm } from "@/lib/lejet";
import { ruajOren } from "./actions";

export const instant = false;

const mesazhet: Record<string, string> = {
  hyr: "Hyr në llogari para se të ndryshosh udhëtimin.",
  ndaluar: "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.",
  fushe: "Shkruaj një orë të vlefshme. ID duhet të jetë 1, 2 ose 3.",
  ruajtur: "Ora u ruajt me sukses.",
  databaza: "Nuk u lidhëm me databazën. Kontrollo Neon dhe provo përsëri.",
};

export default async function PanelPage({
  searchParams,
}: {
  searchParams: Promise<{ m?: string }>;
}) {
  const { m } = await searchParams;

  let profili;

  try {
    profili = await profiliIm();
  } catch {
    return (
      <main className="app-shell">
        <h1>Paneli im</h1>
        <p role="alert">{mesazhet.databaza}</p>
        <Link href="/">Kthehu te udhëtimet</Link>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <h1>Paneli im</h1>

      {m && mesazhet[m] && <p role="status">{mesazhet[m]}</p>}

      {!profili ? (
        <p>Hyr me GitHub për të parë profilin tënd.</p>
      ) : (
        <>
          <p>
            Përshëndetje, {profili.emri}. Roli: <strong>{profili.roli}</strong>.
          </p>
          <p>
            ID e GitHub: <code>{profili.id}</code>
          </p>
        </>
      )}

      <Hyrja brenda={Boolean(profili)} />

      {profili?.roli === "shofer" ? (
        <form action={ruajOren}>
          <h2>Ndrysho orën e udhëtimit tim</h2>
          <input type="hidden" name="id" value="2" />
          <label htmlFor="ora">Ora e re</label>
          <input
            id="ora"
            name="ora"
            type="time"
            defaultValue="08:15"
            required
          />
          <button type="submit">Ruaj orën</button>
          <p>Formulari provon ndryshimin e orës për udhëtimin me ID 2.</p>
        </form>
      ) : profili ? (
        <p>Si udhëtar, mund t'i shohësh udhëtimet, por nuk mund të ndryshosh orën e shoferit.</p>
      ) : null}

      <p>
        <Link href="/">Kthehu te udhëtimet</Link>
      </p>
    </main>
  );
}