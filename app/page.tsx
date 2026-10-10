import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { udhetimet } from "@/lib/udhetimet";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">UDHËTO SË BASHKU</p>
        <h1>RideShare</h1>
        <p>
          Gjej një udhëtim për në AAB dhe zgjidh nisjen
          që të përshtatet.
        </p>
      </header>

      <section>
        <h2>Udhëtimet e disponueshme</h2>

        <div className="trip-list">
          {udhetimet.map((udhetim) => (
            <KartaUdhetimi
              key={udhetim.id}
              udhetim={udhetim}
            />
          ))}
        </div>
      </section>
    </main>
  );
}