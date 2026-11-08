
"use client";

import { useState } from "react";

export default function ZgjedhVendtakimin() {
  const [vendtakimi, setVendtakimi] = useState("");
  const [mesazhi, setMesazhi] = useState("");
  const [dukeKerkuar, setDukeKerkuar] = useState(false);

  function perdorVendndodhjen() {
    if (!navigator.geolocation) {
      setMesazhi(
        "Shfletuesi nuk e mbështet vendndodhjen. Shkruaje vendtakimin manualisht."
      );
      return;
    }

    setDukeKerkuar(true);
    setMesazhi("Duke kërkuar vendndodhjen...");

    navigator.geolocation.getCurrentPosition(
      (pozita) => {
        const { latitude, longitude } = pozita.coords;

        setVendtakimi(
          `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
        );

        setMesazhi("Vendndodhja u mor me sukses.");
        setDukeKerkuar(false);
      },
      (gabimi) => {
        if (gabimi.code === 1) {
          setMesazhi(
            "Leja për vendndodhje u refuzua. Shkruaje vendtakimin manualisht."
          );
        } else if (gabimi.code === 2) {
          setMesazhi(
            "Vendndodhja nuk mund të përcaktohet. Provo manualisht."
          );
        } else {
          setMesazhi(
            "Kërkesa për vendndodhje mori shumë kohë. Provo përsëri."
          );
        }

        setDukeKerkuar(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }

  return (
    <div className="location-picker">
      <h2>Vendtakimi</h2>

      <button
        type="button"
        className="action"
        onClick={perdorVendndodhjen}
        disabled={dukeKerkuar}
      >
        {dukeKerkuar
          ? "Duke kërkuar..."
          : "Përdor vendndodhjen time"}
      </button>

      <p>Ose shkruaje vendtakimin manualisht:</p>

      <input
        type="text"
        value={vendtakimi}
        onChange={(e) => setVendtakimi(e.target.value)}
        placeholder="Shkruaj vendtakimin..."
        aria-label="Vendtakimi"
      />

      {mesazhi && (
        <p role="status" aria-live="polite">
          {mesazhi}
        </p>
      )}

      {vendtakimi && (
        <p>
          Vendtakimi i zgjedhur: <strong>{vendtakimi}</strong>
        </p>
      )}
    </div>
  );
}
