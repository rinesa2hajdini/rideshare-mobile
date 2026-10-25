
import { NextResponse } from "next/server";
import { lexoUdhetimet } from "@/lib/udhetimet";

export async function GET() {
  try {
    const rows = await lexoUdhetimet();

    const trips = rows.map((udhetim) => ({
      id: udhetim.id,
      nisja: udhetim.nisja,
      destinacioni: udhetim.destinacioni,
      ora: udhetim.ora,
      vendtakimi: udhetim.vendtakimi,
      vende: udhetim.vende,
    }));

    return NextResponse.json({ trips });
  } catch {
    return NextResponse.json(
      { error: "Udhëtimet nuk mund të lexohen." },
      { status: 503 }
    );
  }
}
