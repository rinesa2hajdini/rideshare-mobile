
"use client";

import { useEffect } from "react";

export function Pwa() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    async function regjistroServiceWorker() {
      try {
        await navigator.serviceWorker.register("/sw.js");

        const response = await fetch("/api/udhetimet", {
          cache: "no-store",
        });

        if (response.ok) {
          console.log("RideShare: lista publike e udhëtimeve u kontrollua.");
        }
      } catch (error) {
        console.error("RideShare: regjistrimi offline dështoi.", error);
      }
    }

    regjistroServiceWorker();
  }, []);

  return null;
}
