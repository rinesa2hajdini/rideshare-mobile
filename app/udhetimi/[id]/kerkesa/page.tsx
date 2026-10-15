
import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";

export const instant = false;

export default async function Kerkesa({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let udhetim;

  try {
    udhetim = await gjejUdhetimin(id);
  } catch {
    return (
      <main>
        <section className="hero">
          <h1>RideShare</h1>
          <p role="alert">
            Nuk u lidhëm me databazën. Provo përsëri.
          </p>
          <a className="action" href={`/udhetimi/${id}/kerkesa`}>
            Provo përsëri
          </a>
        </section>
      </main>
    );
  }

  if (!udhetim) {
    notFound();
  }

  if (udhetim.vende < 1) {
    return (
      <main>
        <section className="hero">
          <h1>Nuk ka vende të lira</h1>
          <p>Ky udhëtim nuk pranon kërkesa të reja.</p>
          <Link className="action" href={`/udhetimi/${id}`}>
            Kthehu te udhëtimi
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">KËRKESË PËR REZERVIM</p>
        <h1>Kërko një vend</h1>

        <p>
          Udhëtimi: {udhetim.nisja} – {udhetim.destinacioni}
        </p>
        <p>Ora: {udhetim.ora}</p>

        <p>
          Kjo është një demonstrim i kërkesës për rezervim.
          Ende nuk ruhet asnjë rezervim në databazë.
        </p>

        <Link className="action" href={`/udhetimi/${id}`}>
          Kthehu te detajet
        </Link>
      </section>
    </main>
  );
}