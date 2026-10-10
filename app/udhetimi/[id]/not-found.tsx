import Link from "next/link";

export default function UdhëtimiNukUGjet() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">RIDESHARE</p>
        <h1>Udhëtimi nuk u gjet</h1>

        <p>
          Na vjen keq, ky udhëtim nuk ekziston.
          Kthehu te lista për t'i parë udhëtimet e disponueshme.
        </p>

        <Link className="action" href="/">
          Kthehu te faqja kryesore
        </Link>
      </section>
    </main>
  );
}